// data/lessons.js — Master loader
// This file assembles all levels into window.LESSON_DATA
// Individual level files: a1.js, a2.js, b1_b2.js

(function buildCurriculum() {
  // Wait until all level files are loaded
  function assemble() {
    if (!window.LEVEL_A1 || !window.LEVEL_A2 || !window.LEVEL_B1 || !window.LEVEL_B2) {
      return setTimeout(assemble, 50);
    }
    window.LESSON_DATA = {
      levels: [window.LEVEL_A1, window.LEVEL_A2, window.LEVEL_B1, window.LEVEL_B2]
    };
  }
  assemble();
})();
