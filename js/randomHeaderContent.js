/**
 * Random Header Content — 原生 JS 版
 */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var spans = document.querySelectorAll('#hiddenHeaderContentArray span');
    var target = document.getElementById('targetSpan');
    if (!spans.length || !target) return;
    target.textContent = spans[Math.floor(Math.random() * spans.length)].textContent;
  });
})();