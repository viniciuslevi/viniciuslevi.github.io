// script.js — animação typed.js e inicialização AOS
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
  
  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-moon';
      themeIcon.innerHTML = '';
    } else {
      themeIcon.className = 'fas fa-sun';
      themeIcon.innerHTML = '';
    }
    
    // Fallback para emoji se Font Awesome não carregar
    setTimeout(() => {
      const computedStyle = window.getComputedStyle(themeIcon, '::before');
      if (!computedStyle.content || computedStyle.content === 'none') {
        themeIcon.innerHTML = theme === 'dark' ? '🌙' : '☀️';
        themeIcon.className = '';
        themeIcon.style.fontSize = '1.5rem';
      }
    }, 500);
  }

  // Add loading animation to main sections
  const sections = document.querySelectorAll('section, .hero');
  sections.forEach(section => {
    section.classList.add('loading');
  });

  // Scroll progress indicator
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    });
  }

  // Typed.js with enhanced strings
  if (window.Typed) {
    new Typed('#typed', {
      strings: [
        'Backend Developer',
        'Software Embarcado', 
        'Engenheiro de Computação',
        'C | C++ | Java | Python',
        'FastAPI · Django · Spring Boot',
        'ESP32 · IoT · VHDL'
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1400,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // AOS with enhanced settings
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-quad',
      once: true,
      offset: 100,
      delay: 100
    });
  }

  // Add intersection observer for additional animations
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe badges for staggered animation
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
      badge.style.opacity = '0';
      badge.style.transform = 'translateY(20px)';
      badge.style.transition = `all 0.5s ease ${index * 0.1}s`;
      observer.observe(badge);
    });
  }

  // Add smooth scroll for internal links (if any are added later)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced projects carousel interaction
  const projectsGrid = document.querySelector('.projects .grid');
  if (projectsGrid) {
    // Não há mais animação CSS para pausar; habilitar scroll suave por mouse/trackpad
    projectsGrid.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        projectsGrid.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });
  }
});

// Enhanced contact form with better feedback
function handleContact(e) {
  e.preventDefault();
  
  const button = e.target.querySelector('button[type="submit"]');
  const originalText = button.textContent;
  
  // Show loading state
  button.textContent = 'Abrindo...';
  button.disabled = true;
  
  setTimeout(() => {
    const name = document.getElementById('name').value || '';
    const email = document.getElementById('email').value || '';
    const message = document.getElementById('message').value || '';
    const to = 'viniciuslevidev@gmail.com';
    const subject = encodeURIComponent('Contato via site — ' + name);
    const body = encodeURIComponent(
      'Nome: ' + name + 
      '\nEmail: ' + email + 
      '\n\nMensagem:\n' + message +
      '\n\n---\nEnviado via viniciuslevi.github.io'
    );
    
    window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    
    // Reset button
    button.textContent = originalText;
    button.disabled = false;
    
    // Optional: Clear form after sending
    e.target.reset();
  }, 500);
}
