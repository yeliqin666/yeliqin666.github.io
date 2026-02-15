

/**
 * Return to Last Page — 原生 JS 版
 */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var wrap = document.querySelector('.return-to-last-progress-wrap');
    if (!wrap) return;

    var topBtn = document.querySelector('.progress-wrap');
    if (topBtn && topBtn.classList.contains('active-progress')) {
      wrap.style.bottom = '80px';
    } else {
      wrap.style.bottom = '28px';
    }
    wrap.classList.add('active-progress');

    wrap.addEventListener('click', function (e) {
      e.preventDefault();
      window.history.back();
    });
  });
})(); 