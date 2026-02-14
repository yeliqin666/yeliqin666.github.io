/**
 * Native TOC — 替代 jquery.tocify
 * 零依赖，使用 IntersectionObserver 实现高亮跟踪
 */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var tocEl = document.getElementById('toc');
    if (!tocEl) return;

    // 收集所有标题
    var headings = [];
    var selectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    selectors.forEach(function (sel) {
      var els = document.querySelectorAll('.post-md ' + sel + ', .paper-main ' + sel);
      els.forEach(function (el) {
        if (el.id || el.textContent.trim()) headings.push(el);
      });
    });
    if (headings.length < 2) { tocEl.style.display = 'none'; return; }

    // 按文档顺序排序
    headings.sort(function (a, b) {
      var pos = a.compareDocumentPosition(b);
      return pos & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });

    // 确保每个标题有 id
    var usedIds = {};
    headings.forEach(function (h) {
      if (!h.id) {
        var base = h.textContent.trim().replace(/\s+/g, '-').replace(/[^\w\u4e00-\u9fff-]/g, '').substring(0, 40) || 'heading';
        var id = base;
        var n = 1;
        while (usedIds[id]) { id = base + '-' + n; n++; }
        h.id = id;
      }
      usedIds[h.id] = true;
    });

    // 构建 TOC DOM
    var ul = document.createElement('ul');
    ul.className = 'nav nav-list';
    var minLevel = Math.min.apply(null, headings.map(function (h) { return parseInt(h.tagName[1]); }));

    headings.forEach(function (h) {
      var level = parseInt(h.tagName[1]) - minLevel;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent.trim();
      a.style.paddingLeft = (12 + level * 14) + 'px';
      a.addEventListener('click', function (e) {
        e.preventDefault();
        h.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + h.id);
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
    tocEl.innerHTML = '';
    tocEl.appendChild(ul);

    // IntersectionObserver 高亮当前标题
    var tocLinks = ul.querySelectorAll('a');
    var activeIndex = 0;

    function setActive(idx) {
      if (idx === activeIndex && tocLinks[idx] && tocLinks[idx].classList.contains('active')) return;
      tocLinks.forEach(function (l) { l.classList.remove('active'); l.parentElement.classList.remove('active'); });
      if (tocLinks[idx]) {
        tocLinks[idx].classList.add('active');
        tocLinks[idx].parentElement.classList.add('active');
        // 滚动 TOC 使当前项可见
        var container = tocEl.querySelector('.nav-list') || tocEl;
        if (container.scrollHeight > container.clientHeight) {
          tocLinks[idx].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
      activeIndex = idx;
    }

    // 使用 scroll 事件做高亮（更可靠）
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var best = 0;
        for (var i = 0; i < headings.length; i++) {
          if (headings[i].getBoundingClientRect().top <= 80) best = i;
        }
        setActive(best);
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });
})();