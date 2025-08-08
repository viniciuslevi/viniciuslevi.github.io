// script.js — animação typed.js e inicialização AOS
document.addEventListener('DOMContentLoaded', function() {
  // Typed.js
  if (window.Typed) {
    new Typed('#typed', {
      strings: [
        'Backend Developer',
        'Software Embarcado',
        'C | C++ | Java | Python',
        'FastAPI · Django · Spring Boot'
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1400,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // AOS
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-quad',
      once: true
    });
  }
});

// Contact form: opens default mail client with prefilled subject/body using mailto:
function handleContact(e) {
  e.preventDefault();
  var name = document.getElementById('name').value || '';
  var email = document.getElementById('email').value || '';
  var message = document.getElementById('message').value || '';
  var to = 'vinicius.levi@example.com'; // substitua pelo seu e-mail real
  var subject = encodeURIComponent('Contato via site — ' + name);
  var body = encodeURIComponent('Nome: ' + name + '\nEmail: ' + email + '\n\n' + message);
  window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
}
