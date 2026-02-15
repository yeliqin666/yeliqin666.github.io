

/**
 * Return to Top — 原生 JS 版
 * 进度环 + 滚动检测 + 回到顶部
 */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var wrap = document.querySelector('.progress-wrap');
    if (!wrap) return;
    var progressPath = wrap.querySelector('path');
    if (!progressPath) return;

    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = 'none';
    progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();

    var lastPage = document.querySelector('.return-to-last-progress-wrap');
    var offset = 50;

    function updateProgress() {
      var scroll = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      var progress = pathLength - (scroll * pathLength / docHeight);
      progressPath.style.strokeDashoffset = progress;

      if (scroll > offset) {
        wrap.classList.add('active-progress');
        if (lastPage) lastPage.style.bottom = '80px';
      } else {
        wrap.classList.remove('active-progress');
        if (lastPage) lastPage.style.bottom = '28px';
      }
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    wrap.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // LightGallery 兼容：打开灯箱时隐藏按钮
    var lgContainer = document.querySelector('.lg-container');
    if (lgContainer) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          if (m.attributeName !== 'class') return;
          var show = lgContainer.classList.contains('lg-show');
          wrap.style.display = show ? 'none' : '';
          if (lastPage) lastPage.style.display = show ? 'none' : '';
        });
      });
      observer.observe(lgContainer, { attributes: true, attributeFilter: ['class'] });
    }
  });
})(); 