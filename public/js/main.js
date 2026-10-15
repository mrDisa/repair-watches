(function () {
  'use strict';
  var counterId = document.body.getAttribute('data-ym');

  // Цели Яндекс Метрики: click_phone, click_whatsapp
  function goal(name) {
    try { if (counterId && typeof window.ym === 'function') window.ym(Number(counterId), 'reachGoal', name); } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-goal]') : null;
    if (el) goal(el.getAttribute('data-goal'));
  });
})();
