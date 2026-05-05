// ── Service Worker — Deutsch für Kinder ─────────────────
const CACHE_NAME = 'deutsch-v2';

// All files to cache for offline use
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/games.js',
  './data/lessons.js',
  './data/a1.js',
  './data/a2.js',
  './data/b1_b2.js',
  './img/icon-192.png',
  './img/icon-512.png',
  // Google Fonts (cached at runtime below)
];

// ── INSTALL: cache all core assets ──────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean old caches ───────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first for local, network-first for Google Fonts ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Google Fonts → network first, fallback to cache
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      fetch(event.request)
        .then(resp => {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return resp;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Everything else → cache first, then network
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(resp => {
        // Cache successful GET requests
        if (resp && resp.status === 200 && event.request.method === 'GET') {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return resp;
      });
    }).catch(() => {
      // Offline fallback — return index.html for navigation requests
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
