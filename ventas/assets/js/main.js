(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var nombre = form.nombre.value.trim();
      var telefono = form.telefono.value.trim();
      var mensaje = form.mensaje.value.trim();

      if (!nombre || !telefono || !mensaje) {
        status.textContent = 'Por favor completá todos los campos.';
        status.style.color = '#c0392b';
        return;
      }

      var texto = 'Hola, soy ' + nombre + ' (tel: ' + telefono + '). ' + mensaje;
      var url = 'https://wa.me/5491100000000?text=' + encodeURIComponent(texto);

      status.textContent = 'Redirigiendo a WhatsApp...';
      status.style.color = '#25d366';

      window.open(url, '_blank', 'noopener');
      form.reset();
    });
  }
})();
