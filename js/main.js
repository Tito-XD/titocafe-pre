/* ============================================
   头头咖啡屋 Tito's Cafe — Main JavaScript
   Interactions & Animations
   ============================================ */

// --- Page Transition ---
window.addEventListener('load', () => {
  const transition = document.getElementById('pageTransition');
  if (transition) {
    setTimeout(() => {
      transition.classList.add('hidden');
      setTimeout(() => transition.remove(), 600);
    }, 600);
  }
});

// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY || window.pageYOffset;
  if (navbar) {
    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    if (currentScroll > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  lastScroll = currentScroll;
});

// --- Scroll Reveal Animation ---
const revealElements = () => {
  const reveals = document.querySelectorAll('.reveal, .character-card, .merch-card, .gallery-item, .sticker-item');
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// --- Modal Functions ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close modal on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});

// --- Sticker Peel Effect ---
function peelSticker(el) {
  el.style.transition = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
  el.style.transform = 'scale(0.3) rotate(15deg)';
  el.style.opacity = '0';

  setTimeout(() => {
    // Create a "collected" notification
    showNotification('贴纸已收集！ 🎉');
    el.style.display = 'none';
  }, 400);
}

// --- Notification System ---
function showNotification(message) {
  const notif = document.createElement('div');
  notif.style.cssText = `
    position: fixed;
    top: 90px;
    right: 30px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(60,36,21,0.15);
    z-index: 3000;
    font-size: 0.95rem;
    font-weight: 500;
    animation: slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    border-left: 4px solid #6B4226;
  `;
  notif.textContent = message;
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.style.animation = 'slideOutRight 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
    setTimeout(() => notif.remove(), 400);
  }, 2500);
}

// Add notification animations
const notifStyle = document.createElement('style');
notifStyle.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100px); opacity: 0; }
  }
`;
document.head.appendChild(notifStyle);

// --- Shop Filter (for shop page) ---
function filterShop(category, btn) {
  const cards = document.querySelectorAll('.shop-merch-card');
  const btns = document.querySelectorAll('.shop-filter-btn');

  btns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  let count = 0;
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
      count++;
    } else {
      card.style.display = 'none';
    }
  });

  const countEl = document.getElementById('shopCount');
  if (countEl) countEl.textContent = count;
}

// --- Smooth Page Navigation ---
document.addEventListener('DOMContentLoaded', () => {
  // Add reveal class to animatable elements
  const animatable = document.querySelectorAll('.character-card, .merch-card, .gallery-item, .sticker-item, .section-title, .section-label');
  animatable.forEach(el => el.classList.add('reveal'));

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });

  // Mobile hamburger toggle (basic)
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(255,253,247,0.98)';
      navLinks.style.padding = '1rem';
      navLinks.style.borderRadius = '0 0 16px 16px';
      navLinks.style.boxShadow = '0 8px 24px rgba(60,36,21,0.1)';
    });
  }
});

// --- Character Page: Tab Switching ---
// (tab switching is handled by showChar() in characters.html inline script)
// The switchCharTab function below is deprecated and removed.

// --- Gallery Lightbox (for gallery page) ---
let lightboxIndex = 0;
const lightboxImages = [];

function openLightbox(imgSrc, imgAlt) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay active';
  overlay.innerHTML = `
    <div class="modal" style="max-width:90vw; background:transparent; box-shadow:none; padding:0;">
      <button class="modal-close" style="position:fixed; top:20px; right:20px; z-index:10;" onclick="this.closest('.modal-overlay').remove(); document.body.style.overflow='';">✕</button>
      <img src="${imgSrc}" alt="${imgAlt}" style="width:100%; max-height:85vh; object-fit:contain; border-radius:16px;">
    </div>
  `;
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
      document.body.style.overflow = '';
    }
  });
  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);
}

// --- Parallax on Hero (subtle) ---
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-visual');
  if (hero) {
    const scrolled = window.scrollY || window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.08}px)`;
  }
});

console.log('☕ 头头咖啡屋 Tito%c\'s Cafe', 'color:#6B4226; font-weight:bold;', '- JS loaded!');
