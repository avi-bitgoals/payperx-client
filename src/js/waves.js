/* eslint-disable */

!(function (t) {
  function e(t) { return t !== null && t === t.window; } function n(t) { return e(t) ? t : t.nodeType === 9 && t.defaultView; } function a(t) {
    let e,
      a,
      i = { top: 0, left: 0 },
      o = t && t.ownerDocument; return e = o.documentElement, typeof t.getBoundingClientRect !== 'undefined' && (i = t.getBoundingClientRect()), a = n(o), { top: i.top + a.pageYOffset - e.clientTop, left: i.left + a.pageXOffset - e.clientLeft };
  } function i(t) { let e = ''; for (const n in t)t.hasOwnProperty(n) && (e += `${n}:${t[n]};`); return e; } function o(t) { if (d.allowEvent(t) === !1) return null; for (var e = null, n = t.target || t.srcElement; n.parentElement !== null;) { if (!(n instanceof SVGElement || n.className.indexOf('waves-effect') === -1)) { e = n; break; } if (n.classList.contains('waves-effect')) { e = n; break; }n = n.parentElement; } return e; } function r(e) { const n = o(e); n !== null && (c.show(e, n), 'ontouchstart' in t && (n.addEventListener('touchend', c.hide, !1), n.addEventListener('touchcancel', c.hide, !1)), n.addEventListener('mouseup', c.hide, !1), n.addEventListener('mouseleave', c.hide, !1)); } var s = s || {},
    u = document.querySelectorAll.bind(document),
    c = { duration: 750,
      show(t, e) {
        if (t.button === 2) return !1; let n = e || this,
          o = document.createElement('div'); o.className = 'waves-ripple', n.appendChild(o); let r = a(n),
          s = t.pageY - r.top,
          u = t.pageX - r.left,
          d = `scale(${n.clientWidth / 100 * 10})`; 'touches' in t && (s = t.touches[0].pageY - r.top, u = t.touches[0].pageX - r.left), o.setAttribute('data-hold', Date.now()), o.setAttribute('data-scale', d), o.setAttribute('data-x', u), o.setAttribute('data-y', s); const l = { top: `${s}px`, left: `${u}px` }; o.className += ' waves-notransition', o.setAttribute('style', i(l)), o.className = o.className.replace('waves-notransition', ''), l['-webkit-transform'] = d, l['-moz-transform'] = d, l['-ms-transform'] = d, l['-o-transform'] = d, l.transform = d, l.opacity = '1', l['-webkit-transition-duration'] = `${c.duration}ms`, l['-moz-transition-duration'] = `${c.duration}ms`, l['-o-transition-duration'] = `${c.duration}ms`, l['transition-duration'] = `${c.duration}ms`, l['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)', l['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)', l['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)', l['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)', o.setAttribute('style', i(l));
      },
      hide(t) {
        d.touchup(t); let e = this,
          n = (1.4 * e.clientWidth, null),
          a = e.getElementsByClassName('waves-ripple'); if (!(a.length > 0)) return !1; n = a[a.length - 1]; let o = n.getAttribute('data-x'),
          r = n.getAttribute('data-y'),
          s = n.getAttribute('data-scale'),
          u = Date.now() - Number(n.getAttribute('data-hold')),
          l = 350 - u; l < 0 && (l = 0), setTimeout(() => { const t = { top: `${r}px`, left: `${o}px`, opacity: '0', '-webkit-transition-duration': `${c.duration}ms`, '-moz-transition-duration': `${c.duration}ms`, '-o-transition-duration': `${c.duration}ms`, 'transition-duration': `${c.duration}ms`, '-webkit-transform': s, '-moz-transform': s, '-ms-transform': s, '-o-transform': s, transform: s }; n.setAttribute('style', i(t)), setTimeout(() => { try { e.removeChild(n); } catch (t) { return !1; } }, c.duration); }, l);
      },
      wrapInput(t) { for (let e = 0; e < t.length; e++) { const n = t[e]; if (n.tagName.toLowerCase() === 'input') { const a = n.parentNode; if (a.tagName.toLowerCase() === 'i' && a.className.indexOf('waves-effect') !== -1) continue; const i = document.createElement('i'); i.className = `${n.className} waves-input-wrapper`; let o = n.getAttribute('style'); o || (o = ''), i.setAttribute('style', o), n.className = 'waves-button-input', n.removeAttribute('style'), a.replaceChild(i, n), i.appendChild(n); } } } },
    d = { touches: 0, allowEvent(t) { let e = !0; return t.type === 'touchstart' ? d.touches += 1 : t.type === 'touchend' || t.type === 'touchcancel' ? setTimeout(() => { d.touches > 0 && (d.touches -= 1); }, 500) : t.type === 'mousedown' && d.touches > 0 && (e = !1), e; }, touchup(t) { d.allowEvent(t); } }; s.displayEffect = function (e) { e = e || {}, 'duration' in e && (c.duration = e.duration), c.wrapInput(u('.waves-effect')), 'ontouchstart' in t && document.body.addEventListener('touchstart', r, !1), document.body.addEventListener('mousedown', r, !1); }, s.attach = function (e) { e.tagName.toLowerCase() === 'input' && (c.wrapInput([e]), e = e.parentElement), 'ontouchstart' in t && e.addEventListener('touchstart', r, !1), e.addEventListener('mousedown', r, !1); }, t.Waves = s, document.addEventListener('DOMContentLoaded', () => { s.displayEffect(); }, !1);
}(window));
