(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  document.addEventListener('click', function (event) {
    var el = event.target.closest('[data-event="call_click"]');
    if (!el) return;

    window.dataLayer.push({
      'event': 'call_click',
      'service': el.getAttribute('data-service')
    });
  });
})();
