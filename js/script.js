/**
 * Tito's Cafe - 主交互脚本
 */

const characters = [
    {
        id: 'tito',
        name: 'Tito',
        description: '店长 · 灰蓝狼',
        color: '#6B8E9F',
        image: 'images/Tito Avatar (Transparent).png'
    },
    {
        id: 'tigerz',
        name: 'TigerZ',
        description: '浅蓝老虎 · 游戏达人',
        color: '#5DADE2',
        image: 'images/TigerZ Avatar (Transparent).png'
    },
    {
        id: 'frank',
        name: 'Frank',
        description: '橘色老虎 · 艺术系',
        color: '#E67E22',
        image: 'images/Frank Avatar (Transparent).png'
    },
    {
        id: 'kayu',
        name: 'Kayu',
        description: '白色熊 · 户外系',
        color: '#BDC3C7',
        image: 'images/Kayu Avatar (Transparent).png'
    },
    {
        id: 'ton',
        name: 'TON',
        description: '茶色狼 · 音乐家',
        color: '#A0522D',
        image: 'images/TON Stand (Transparent).png'
    },
    {
        id: 'diandian',
        name: 'Diandian',
        description: '点点 · 宠物猫',
        color: '#F5B041',
        image: 'images/TON with Diandian (Pet Cat) Sticker (Transparent).png'
    },
    {
        id: 'tigerboo',
        name: 'TigerBoo',
        description: '游戏吉祥物',
        color: '#9B59B6',
        image: 'images/TigerZ TigerBoo Sticker (Game Mascot NETA Mascot) (Transparent).png'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initParticles();
    initCharacterCarousel();
    initScrollAnimations();
    initNavigation();
});

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
        createParticle(container, i);
    }
}

function createParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    const size = 2 + Math.random() * 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${6 + Math.random() * 4}s`;

    container.appendChild(particle);
}

function initCharacterCarousel() {
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!track) return;

    characters.forEach((char, index) => {
        const card = createCharacterCard(char);
        track.appendChild(card);

        if (dotsContainer) {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => scrollToCard(index));
            dotsContainer.appendChild(dot);
        }
    });

    if (prevBtn) prevBtn.addEventListener('click', () => scrollCarousel(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollCarousel(1));

    track.addEventListener('scroll', updateDots, { passive: true });
}

function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.innerHTML = `
        <div class="card-image">
            <img src="${character.image}" alt="${character.name}">
        </div>
        <h3>${character.name}</h3>
        <p>${character.description}</p>
    `;
    return card;
}

function scrollCarousel(direction) {
    const track = document.getElementById('carouselTrack');
    if (!track) return;

    const cardWidth = 280 + 24;
    track.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
}

function scrollToCard(index) {
    const track = document.getElementById('carouselTrack');
    if (!track) return;

    const cardWidth = 280 + 24;
    track.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
}

function updateDots() {
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll('.carousel-card');
    const dots = dotsContainer.querySelectorAll('.dot');
    const cardWidth = 280 + 24;

    let activeIndex = Math.round(track.scrollLeft / cardWidth);
    activeIndex = Math.max(0, Math.min(activeIndex, cards.length - 1));

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.philosophy-card, .product-card, .feature-item');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') scrollCarousel(-1);
    else if (e.key === 'ArrowRight') scrollCarousel(1);
});

window.ToutouData = {
    characters: characters,
    getCharacterById: (id) => characters.find(c => c.id === id),
    getAllCharacters: () => [...characters]
};
