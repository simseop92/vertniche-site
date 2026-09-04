// 메뉴 토글, 전후 슬라이더, 스크롤 등장, 갤러리 탭. 그 외 스크립트는 없다.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '닫기' : '메뉴';
    });
  }
  document.querySelectorAll('.ba').forEach(function (ba) {
    var range = ba.querySelector('input[type="range"]');
    if (!range) return;
    range.addEventListener('input', function () { ba.style.setProperty('--pos', range.value + '%'); });
  });
  var targets = document.querySelectorAll('.quotes li, .concerns-photo, .reasons > div, .steps li, .grid figure, .pl-reviews li, .hand-grid figure, .notes li, .photo-pair figure, .photo-band, .process-photo, .contact-photo, .director-grid > *');
  if ('IntersectionObserver' in window && targets.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) {
      var order = el.parentNode ? Array.prototype.indexOf.call(el.parentNode.children, el) : 0;
      el.style.transitionDelay = Math.min(order, 5) * 60 + 'ms';
      el.classList.add('reveal'); io.observe(el);
    });
  }
  document.querySelectorAll('[data-tabs]').forEach(function (tabs) {
    var grid = document.querySelector(tabs.getAttribute('data-tabs'));
    if (!grid) return;
    tabs.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.getAttribute('data-group');
        tabs.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        grid.querySelectorAll('figure').forEach(function (fig) {
          fig.hidden = group !== 'all' && fig.getAttribute('data-group') !== group;
        });
      });
    });
  });
})();
