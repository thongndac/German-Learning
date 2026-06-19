// ── Service Worker — Deutsch für Kinder ─────────────────
const CACHE_NAME = 'deutsch-v7';

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
  './img/mascot.png',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/bg_a1.png',
  './img/bg_a2.png',
  './img/bg_b1.png',
  './img/bg_b2.png',
];

// ── INSTALL: cache all core assets ──────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting()) // Activate immediately
  );
});

// ── ACTIVATE: clean old caches & take control ───────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
      )
    ).then(() => self.clients.claim()) // Take control of all tabs immediately
  );
});

// ── FETCH: NETWORK-FIRST for all local assets ───────────
// Always try to get the latest version from server.
// Only fall back to cache when offline.
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(resp => {
        // Got a fresh response — update the cache in the background
        if (resp && resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return resp;
      })
      .catch(() => {
        // Network failed (offline) — serve from cache
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // For navigation requests, fallback to index.html
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
