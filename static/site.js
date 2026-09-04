// 메뉴 토글과 갤러리 탭. 그 외 스크립트는 없다.
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
