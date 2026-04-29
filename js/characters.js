/**
 * 角色页面交互脚本
 */

document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    initCardAnimations();
});

// 筛选功能
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const characterCards = document.querySelectorAll('.character-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // 筛选卡片
            characterCards.forEach((card, index) => {
                const category = card.dataset.category;
                const shouldShow = filter === 'all' || category === filter;

                if (shouldShow) {
                    card.classList.remove('hidden');
                    card.classList.add('filtering');
                    setTimeout(() => {
                        card.classList.remove('filtering');
                    }, 50 + index * 50);
                } else {
                    card.classList.add('filtering');
                    setTimeout(() => {
                        card.classList.add('hidden');
                        card.classList.remove('filtering');
                    }, 300);
                }
            });
        });
    });
}

// 卡片动画
function initCardAnimations() {
    const cards = document.querySelectorAll('.character-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}
