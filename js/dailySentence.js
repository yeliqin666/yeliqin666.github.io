/**
 * 每日一句（古诗词/名言） — 多 API 支持版
 * 支持 jinrishici | hitokoto(一言) | custom
 * 3 秒超时 + 兜底文本
 */
(function () {
  'use strict';

  // API 配置映射
  var APIs = {
    jinrishici: {
      url: function (token) {
        // 使用 v1 API 的 /all.json（每次随机）而非 v2 的 /one.json（今日一句）
        return 'https://v1.jinrishici.com/all.json';
      },
      parse: function (d) {
        // v1 API 数据结构：{ content, author, origin }
        if (d.content) {
          var content = d.content;
          var author = d.author;
          var title = d.origin;
          return content + (author ? ' ——' + author : '') + (title ? '《' + title + '》' : '');
        }
        return null;
      }
    },
    hitokoto: {
      url: 'https://v1.hitokoto.cn/?c=i&c=k&c=d',
      parse: function (d) {
        if (d.hitokoto) {
          var text = d.hitokoto;
          var author = d.from_who;
          var source = d.from;
          var suffix = '';
          if (author) suffix += ' ——' + author;
          if (source) suffix += '《' + source + '》';
          return text + suffix;
        }
        return null;
      }
    },
    custom: {
      url: '',  // 由 data-custom-url 提供
      parse: function (d) {
        // 兼容多种格式
        if (d.content) return d.content;
        if (d.hitokoto) return d.hitokoto;
        if (d.data && d.data.content) return d.data.content;
        return null;
      }
    }
  };

  function run() {
    var el = document.getElementById('quote');
    if (!el) return;

    // 从 data 属性读取配置
    var apiType = el.dataset.api || 'jinrishici';
    var timeout = parseInt(el.dataset.timeout) || 3000;
    var customUrl = el.dataset.customUrl || '';
    var token = el.dataset.token || '';
    var fallback = el.dataset.fallback || '读书不觉已春深，一寸光阴一寸金。';

    var api = APIs[apiType];
    if (!api) api = APIs.jinrishici;  // 兜底为今日诗词

    // 获取 URL
    var url;
    if (apiType === 'custom' && customUrl) {
      url = customUrl;
    } else if (typeof api.url === 'function') {
      url = api.url(token);
    } else {
      url = api.url;
    }

    if (!url) {
      el.textContent = fallback;
      return;
    }

    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, timeout);

    fetch(url, { signal: ctrl.signal })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (d) {
        clearTimeout(timer);
        var text = api.parse(d);
        if (text) {
          el.textContent = text;
        } else {
          throw new Error('Parse failed');
        }
      })
      .catch(function (err) {
        clearTimeout(timer);
        console.warn('Hitokoto API failed:', err.message || err);
        el.textContent = fallback;
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();



