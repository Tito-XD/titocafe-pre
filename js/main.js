/**
 * 头头咖啡屋 | Main JavaScript
 * 遵循默会原理：交互自然流畅，无需说明书
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLightbox();
  initScrollAnimations();
  initSmoothScroll();
});

/* ---- Navigation ---- */
function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('nav__menu--open');
      toggle.setAttribute(
        'aria-expanded',
        menu.classList.contains('nav__menu--open')
      );
    });

    // Close menu when clicking a link
    menu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('nav__menu--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active link highlighting based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('nav__link--active');
    }
  });
}

/* ---- Lightbox Gallery ---- */
function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const closeBtn = lightbox.querySelector('.lightbox__close');

  document.querySelectorAll('.gallery__item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('lightbox--open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ---- Scroll Animations ---- */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .slide-up, .card, .character-card, .timeline__item').forEach(el => {
    el.classList.add('will-animate');
    observer.observe(el);
  });
}

/* ---- Smooth Scroll ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ---- Add animation styles dynamically ---- */
const animationStyles = document.createElement('style');
animationStyles.textContent = `
  .will-animate {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .will-animate.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .card.will-animate {
    transform: translateY(24px) scale(0.98);
  }

  .card.will-animate.is-visible {
    transform: translateY(0) scale(1);
  }
`;
document.head.appendChild(animationStyles);
