/* ═════════════════════════════════════════════════════════════════
   MiuiX Runtime — HyperOS 交互引擎 v2
   ─────────────────────────────────────────────────────────────────
   BottomSheet (拖拽+惯性 fling) · Dialog · Snackbar · HyperNav
   · Theme Toggle · Spring Physics
   源自 compose-miuix-ui/miuix v0.8.5 提取参数
   ═════════════════════════════════════════════════════════════════ */
;(function () {
    'use strict';

    /* ── 物理常数 (MiuiX Switch.kt: dampingRatio=0.6, stiffness=987) ── */
    var SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
    var EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';
    var FLING_THRESHOLD = 0.4;   // px/ms — 超过此速度即 fling 关闭
    var DISMISS_RATIO = 0.35;    // 拖过 35% 高度即关闭
    var VELOCITY_WINDOW = 5;     // 追踪最近 N 个触摸点

    /* ════════════════════════════════════════════════════════════
       1. BottomSheet — 真正的半屏拖拽弹窗
       ════════════════════════════════════════════════════════════ */
    window.MiuixBottomSheet = {
        _state: {},

        open: function (id) {
            var overlay = document.getElementById(id + '-overlay');
            var sheet = document.getElementById(id);
            if (!sheet) {
                overlay = document.getElementById(id);
                sheet = overlay && overlay.querySelector('.miuix-bottomsheet, .tool-modal');
            }
            if (!sheet || !overlay) return;

            overlay.classList.add('open');
            overlay.classList.add('active');
            sheet.classList.add('active');
            document.body.style.overflow = 'hidden';

            sheet.removeAttribute('data-miuix-closing');
            overlay.style.transition = '';
            overlay.style.background = '';
            sheet.style.transition = '';
            sheet.style.transform = '';

            this._state[id] = {
                sheet: sheet,
                overlay: overlay,
                startY: 0,
                currentY: 0,
                isDragging: false,
                tracker: [],
                closing: false
            };

            sheet.dispatchEvent(new CustomEvent('miuix:opened', {
                detail: { id: id }
            }));
        },

        close: function (id) {
            var st = this._state[id];
            var sheet = st ? st.sheet : document.getElementById(id);
            var overlay = st ? st.overlay : document.getElementById(id + '-overlay');
            if (!sheet) return;
            if (st && st.closing) return;
            if (sheet.getAttribute('data-miuix-closing') === '1') return;

            if (st) st.closing = true;
            sheet.setAttribute('data-miuix-closing', '1');

            sheet.classList.remove('dragging');

            sheet.style.transition = 'transform 0.38s ' + SPRING;
            sheet.style.transform = 'translateY(100%)';

            if (overlay) {
                overlay.classList.remove('active');
            }

            setTimeout(function () {
                sheet.classList.remove('active');
                if (overlay) {
                    overlay.classList.remove('open');
                    overlay.style.transition = '';
                    overlay.style.background = '';
                }
                sheet.style.transition = '';
                sheet.style.transform = '';
                sheet.removeAttribute('data-miuix-closing');
                document.body.style.overflow = '';

                sheet.dispatchEvent(new CustomEvent('miuix:closed', {
                    detail: { id: id }
                }));
            }, 400);

            delete this._state[id];
        },

        _startDrag: function (id, clientY) {
            var st = this._state[id];
            if (!st) return;
            st.startY = clientY;
            st.currentY = clientY;
            st.isDragging = true;
            st.tracker = [{ y: clientY, t: Date.now() }];
            st.sheet.style.transition = 'none';
            st.sheet.classList.add('dragging');
        },

        _moveDrag: function (id, clientY) {
            var st = this._state[id];
            if (!st || !st.isDragging) return;
            var dy = clientY - st.startY;

            if (dy < 0) dy = dy * 0.15;
            st.sheet.style.transform = 'translateY(' + Math.max(dy, -20) + 'px)';

            var height = st.sheet.offsetHeight;
            var progress = Math.min(Math.max(dy, 0) / height, 1);
            st.overlay.style.background = 'rgba(0,0,0,' + (0.5 * (1 - progress)).toFixed(3) + ')';

            st.tracker.push({ y: clientY, t: Date.now() });
            if (st.tracker.length > VELOCITY_WINDOW) st.tracker.shift();
            st.currentY = clientY;
        },

        _endDrag: function (id) {
            var st = this._state[id];
            if (!st || !st.isDragging) return;
            st.isDragging = false;
            st.sheet.classList.remove('dragging');

            var dy = st.currentY - st.startY;
            var height = st.sheet.offsetHeight;

            var velocity = 0;
            var tr = st.tracker;
            if (tr.length >= 2) {
                var last = tr[tr.length - 1];
                var prev = tr[Math.max(tr.length - 3, 0)];
                var dt = last.t - prev.t;
                if (dt > 0) velocity = (last.y - prev.y) / dt;
            }

            var shouldDismiss = (velocity > FLING_THRESHOLD) || (dy > height * DISMISS_RATIO);
            var self = this;

            if (shouldDismiss && dy > 0) {
                var remaining = height - dy;
                var duration = Math.max(0.15, Math.min(remaining / (Math.abs(velocity) * 1000 + 200), 0.5));

                st.sheet.style.transition = 'transform ' + duration.toFixed(2) + 's ' + EASE_OUT;
                st.sheet.style.transform = 'translateY(' + height + 'px)';
                st.overlay.style.transition = 'background ' + duration.toFixed(2) + 's ease';
                st.overlay.style.background = 'rgba(0,0,0,0)';

                setTimeout(function () { self.close(id); }, duration * 1000 + 50);
            } else {
                st.sheet.style.transition = 'transform 0.4s ' + SPRING;
                st.sheet.style.transform = 'translateY(0)';
                st.overlay.style.transition = 'background 0.3s ease';
                st.overlay.style.background = '';
            }
        },

        _onTouchStart: function (id, e) {
            if (!e.touches || !e.touches.length) return;
            this._startDrag(id, e.touches[0].clientY);
        },

        _onTouchMove: function (id, e) {
            if (!e.touches || !e.touches.length) return;
            var st = this._state[id];
            if (!st) return;
            var touchY = e.touches[0].clientY;

            if (st.isDragging) {
                this._moveDrag(id, touchY);
                e.preventDefault();
                return;
            }

            if (st._touchStartY != null) {
                var dy = touchY - st._touchStartY;
                if (dy > 8 && st.sheet.scrollTop <= 0) {
                    this._startDrag(id, st._touchStartY);
                    this._moveDrag(id, touchY);
                    e.preventDefault();
                }
            }
        },

        _onTouchEnd: function (id) {
            var st = this._state[id];
            if (st) st._touchStartY = null;
            this._endDrag(id);
        },

        _onPointerStart: function (id, e) {
            this._startDrag(id, e.clientY);
        },

        _onPointerMove: function (id, e) {
            var st = this._state[id];
            if (!st || !st.isDragging) return;
            this._moveDrag(id, e.clientY);
            e.preventDefault();
        },

        _onPointerEnd: function (id) {
            this._endDrag(id);
        },

        init: function () {
            var self = this;

            document.querySelectorAll('.miuix-bottomsheet-overlay, .tool-overlay').forEach(function (overlay) {
                overlay.addEventListener('click', function (e) {
                    if (e.target === overlay) {
                        var sheetId = overlay.id.replace('-overlay', '');
                        self.close(sheetId);
                    }
                });
            });

            document.querySelectorAll('.miuix-bottomsheet, .tool-modal').forEach(function (sheet) {
                var id = sheet.id || (sheet.closest('[id]') && sheet.closest('[id]').id.replace('-overlay', ''));
                if (!id) return;
                var handle = sheet.querySelector('.miuix-bottomsheet-handle') || sheet;

                handle.addEventListener('touchstart', function (e) {
                    self._onTouchStart(id, e);
                }, { passive: true });

                sheet.addEventListener('touchstart', function (e) {
                    if (!e.touches || !e.touches.length) return;
                    var st = self._state[id];
                    if (st) st._touchStartY = e.touches[0].clientY;
                }, { passive: true });

                sheet.addEventListener('touchmove', function (e) {
                    self._onTouchMove(id, e);
                }, { passive: false });

                sheet.addEventListener('touchend', function () {
                    self._onTouchEnd(id);
                });

                handle.addEventListener('pointerdown', function (e) {
                    if (e.pointerType === 'mouse' && e.button !== 0) return;
                    self._onPointerStart(id, e);
                    if (handle.setPointerCapture && e.pointerId !== undefined) {
                        try { handle.setPointerCapture(e.pointerId); } catch (_) {}
                    }
                });

                handle.addEventListener('pointermove', function (e) {
                    self._onPointerMove(id, e);
                });

                handle.addEventListener('pointerup', function () {
                    self._onPointerEnd(id);
                });

                handle.addEventListener('pointercancel', function () {
                    self._onPointerEnd(id);
                });
            });
        }
    };


    /* ════════════════════════════════════════════════════════════
       1b. Tabs / Segmented 切换行为（调用 MiuiX 原生 tab 语义）
       ════════════════════════════════════════════════════════════ */
    window.MiuixTabs = {
        activate: function (tabEl) {
            if (!tabEl || !tabEl.parentElement) return;
            var container = tabEl.parentElement;
            container.querySelectorAll('.miuix-tab').forEach(function (el) {
                el.classList.remove('active');
                el.setAttribute('aria-selected', 'false');
            });
            tabEl.classList.add('active');
            tabEl.setAttribute('aria-selected', 'true');
        },

        bind: function (container, onChange) {
            if (!container) return;
            var self = this;
            container.querySelectorAll('.miuix-tab').forEach(function (tab) {
                tab.addEventListener('click', function () {
                    self.activate(tab);
                    if (typeof onChange === 'function') onChange(tab);
                });
            });
        }
    };


    /* ════════════════════════════════════════════════════════════
       2. Dialog
       ════════════════════════════════════════════════════════════ */
    window.MiuixDialog = {
        open: function (id) {
            var overlay = document.getElementById(id);
            if (!overlay) return;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        },
        close: function (id) {
            var overlay = document.getElementById(id);
            if (!overlay) return;
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        },
        init: function () {
            document.querySelectorAll('.miuix-dialog-overlay').forEach(function (overlay) {
                overlay.addEventListener('click', function (e) {
                    if (e.target === overlay) MiuixDialog.close(overlay.id);
                });
            });
        }
    };


    /* ════════════════════════════════════════════════════════════
       3. Snackbar
       ════════════════════════════════════════════════════════════ */
    window.MiuixSnackbar = {
        _timer: null,
        show: function (message, opts) {
            opts = opts || {};
            var dur = opts.duration || 3000;
            var bar = document.getElementById('miuix-snackbar-global');
            if (!bar) {
                bar = document.createElement('div');
                bar.id = 'miuix-snackbar-global';
                bar.className = 'miuix-snackbar';
                document.body.appendChild(bar);
            }
            bar.innerHTML = '';
            var txt = document.createElement('span');
            txt.textContent = message;
            bar.appendChild(txt);
            if (opts.action) {
                var btn = document.createElement('button');
                btn.className = 'miuix-snackbar-action';
                btn.textContent = opts.action;
                btn.addEventListener('click', function () {
                    if (opts.onAction) opts.onAction();
                    MiuixSnackbar.hide();
                });
                bar.appendChild(btn);
            }
            requestAnimationFrame(function () { bar.classList.add('show'); });
            clearTimeout(this._timer);
            this._timer = setTimeout(function () { MiuixSnackbar.hide(); }, dur);
        },
        hide: function () {
            var bar = document.getElementById('miuix-snackbar-global');
            if (bar) bar.classList.remove('show');
        }
    };


    /* ════════════════════════════════════════════════════════════
       4. HyperOS 底部导航栏 — 滚动自动隐藏/显示
       ════════════════════════════════════════════════════════════ */
    window.HyperNav = {
        _lastY: 0,
        _ticking: false,
        _hidden: false,
        _nav: null,

        init: function () {
            this._nav = document.getElementById('hyperNav');
            if (!this._nav) return;
            var self = this;

            window.addEventListener('scroll', function () {
                if (!self._ticking) {
                    requestAnimationFrame(function () {
                        var y = window.scrollY;
                        var delta = y - self._lastY;

                        if (delta > 12 && y > 80 && !self._hidden) {
                            self._nav.classList.add('hidden');
                            self._hidden = true;
                        } else if (delta < -12 && self._hidden) {
                            self._nav.classList.remove('hidden');
                            self._hidden = false;
                        }

                        self._lastY = y;
                        self._ticking = false;
                    });
                    self._ticking = true;
                }
            }, { passive: true });
        }
    };


    /* ════════════════════════════════════════════════════════════
       5. Large Title（文章页可折叠大标题）
       ════════════════════════════════════════════════════════════ */
    window.MiuixLargeTitle = {
        _inited: false,
        _ticking: false,
        _container: null,
        _region: null,
        _compact: null,

        init: function () {
            if (this._inited) return;
            this._inited = true;
        },

        _update: function () {}
    };


    /* ════════════════════════════════════════════════════════════
       6. Dark Mode Toggle
       ════════════════════════════════════════════════════════════ */
    window.MiuixTheme = {
        get: function () {
            var stored = localStorage.getItem('miuix-theme');
            if (stored === 'dark' || stored === 'light') return stored;
            return 'light';
        },
        set: function (mode) {
            if (mode === 'auto') {
                localStorage.removeItem('miuix-theme');
                document.documentElement.removeAttribute('data-theme');
                this._apply();
                return;
            }
            localStorage.setItem('miuix-theme', mode);
            document.documentElement.setAttribute('data-theme', mode);
            this._apply();
        },
        toggle: function () {
            this.set(this.get() === 'dark' ? 'light' : 'dark');
        },
        _apply: function () {
            document.dispatchEvent(new CustomEvent('miuix-theme-change', {
                detail: { theme: this.get() }
            }));
        },
        init: function () {
            var stored = localStorage.getItem('miuix-theme');
            if (stored) {
                document.documentElement.setAttribute('data-theme', stored);
            }
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
                if (!localStorage.getItem('miuix-theme')) {
                    MiuixTheme._apply();
                }
            });
        }
    };


    /* ════════════════════════════════════════════════════════════
       6. 触摸反馈（iOS Safari :active fix）
       ════════════════════════════════════════════════════════════ */
    function initTouchFeedback() {
        document.addEventListener('touchstart', function () {}, { passive: true });
    }


    /* ════════════════════════════════════════════════════════════
       初始化
       ════════════════════════════════════════════════════════════ */
    function initAll() {
        MiuixTheme.init();
        MiuixBottomSheet.init();
        MiuixDialog.init();
        HyperNav.init();
        MiuixLargeTitle.init();
        initTouchFeedback();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();
