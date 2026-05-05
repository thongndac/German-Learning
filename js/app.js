// js/app.js
import { getState } from './state.js';
import { renderSplash, setupSplashHandlers } from './screens/splash.js';
import { renderAvatarSelection, setupSelectionHandlers } from './screens/avatar-selection.js';
import { renderHome, setupHomeHandlers } from './screens/home.js';
import { renderMap, setupMapHandlers } from './screens/map.js';
import { renderLessonList, setupLessonListHandlers } from './screens/lesson-list.js';
import { renderMockGame, setupGameHandlers } from './games/mock-game.js';

function navigate(route) {
  const main = document.getElementById('main-content');
  const header = document.getElementById('header');
  if (header) header.style.display = 'none';

  switch (route) {
    case 'splash':
      main.innerHTML = renderSplash();
      setupSplashHandlers(navigate);
      break;

    case 'selection_or_home':
      if (!getState().avatarType) navigate('selection');
      else navigate('home');
      break;

    case 'selection':
      main.innerHTML = renderAvatarSelection();
      setupSelectionHandlers(navigate);
      break;

    case 'home':
      main.innerHTML = renderHome(navigate);
      setupHomeHandlers(navigate);
      break;

    case 'map':
      main.innerHTML = renderMap();
      setupMapHandlers(navigate);
      break;

    case 'lesson-list':
      main.innerHTML = renderLessonList();
      setupLessonListHandlers(navigate);
      break;

    case 'lesson':
      main.innerHTML = renderMockGame();
      setupGameHandlers(navigate);
      break;

    default:
      navigate('home');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  navigate('splash');
});
