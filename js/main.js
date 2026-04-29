const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const IMG = 'assets/images/';
const products = [
  { id: 'tito-stand', name: 'Tito 店长立牌', role: 'Tito', type: 'stand', price: 68, image: IMG + 'tito-stand-transparent.png', note: '灰蓝狼店长的迎客立牌，适合放在桌角。' },
  { id: 'tigerz-stand', name: 'TigerZ 浅蓝虎立牌', role: 'TigerZ', type: 'stand', price: 66, image: IMG + 'tigerz-stand-transparent.png', note: '游戏区常驻嘉宾，清爽浅蓝色视觉。' },
  { id: 'frank-stand', name: 'Frank 绘画位立牌', role: 'Frank', type: 'stand', price: 66, image: IMG + 'frank-stand-transparent.png', note: '橘色虎角色，适合搭配画具主题陈列。' },
  { id: 'kayu-stand', name: 'Kayu 温柔白熊立牌', role: 'Kayu', type: 'stand', price: 66, image: IMG + 'kayu-stand-transparent.png', note: '安静、柔软、适合温暖角落。' },
  { id: 'ton-stand', name: 'TON 吉他立牌', role: 'TON', type: 'stand', price: 72, image: IMG + 'ton-stand-transparent.png', note: '茶色狼角色，带一点音乐人的自由感。' },
  { id: 'tito-avatar', name: 'Tito 头像徽章', role: 'Tito', type: 'badge', price: 18, image: IMG + 'tito-avatar-transparent.png', note: '适合包挂、相机包和咖啡随行袋。' },
  { id: 'tigerz-avatar', name: 'TigerZ 头像徽章', role: 'TigerZ', type: 'badge', price: 18, image: IMG + 'tigerz-avatar-transparent.png', note: '轻快、明亮，像游戏开始键。' },
  { id: 'frank-drawing', name: 'Frank 绘画贴纸', role: 'Frank', type: 'sticker', price: 16, image: IMG + 'frank-drawing-chibi-transparent.png', note: '给画画拖延症的一点可爱提醒。' },
  { id: 'kayu-tail', name: 'Kayu 尾巴贴纸', role: 'Kayu', type: 'sticker', price: 16, image: IMG + 'kayu-tail-draw-sticker-transparent.png', note: '小尺寸透明贴，适合手帐和设备壳。' },
  { id: 'ton-dian', name: 'TON 与点点贴纸', role: 'TON', type: 'sticker', price: 18, image: IMG + 'ton-with-diandian-pet-cat-sticker-transparent.png', note: '茶色狼和宠物猫点点的安静合影。' },
  { id: 'tigerboo', name: 'TigerBoo 吉祥物贴纸', role: 'TigerZ', type: 'sticker', price: 18, image: IMG + 'tigerz-tigerboo-sticker-game-mascot-neta-mascot-transparent.png', note: 'TigerZ 游戏内吉祥物角色拟设。' },
  { id: 'summer-pack', name: 'Summer Walk 组合包', role: 'Tito', type: 'set', price: 42, image: IMG + 'summer-walk-sticker-with-tito-tigerz-transparent.png', note: 'Tito 与 TigerZ 的夏日散步主题小套装。' }
];

const gallery = [
  { title: 'Tito 设定图', group: 'sketch', role: 'Tito', image: IMG + 'tito-sketch-set-clean-bg.png' },
  { title: 'TigerZ 设定图', group: 'sketch', role: 'TigerZ', image: IMG + 'tigerz-sketch-set-clean-bg.png' },
  { title: 'Frank 设定图', group: 'sketch', role: 'Frank', image: IMG + 'frank-sketch-set.png' },
  { title: 'Kayu 设定图', group: 'sketch', role: 'Kayu', image: IMG + 'kayu-sketch-set-clean-bg.png' },
  { title: 'TON 设定图', group: 'sketch', role: 'TON', image: IMG + 'ton-sketch-set-clean-bg.png' },
  { title: 'Tito 店长立绘', group: 'stand', role: 'Tito', image: IMG + 'tito-stand-transparent.png' },
  { title: 'TigerZ 立绘', group: 'stand', role: 'TigerZ', image: IMG + 'tigerz-stand-transparent.png' },
  { title: 'Frank 立绘', group: 'stand', role: 'Frank', image: IMG + 'frank-stand-transparent.png' },
  { title: 'Kayu 立绘', group: 'stand', role: 'Kayu', image: IMG + 'kayu-stand-transparent.png' },
  { title: 'TON 与 Zacian', group: 'stand', role: 'TON', image: IMG + 'ton-stand-with-zacian-transparent.png' },
  { title: '夏日散步', group: 'sticker', role: 'Tito', image: IMG + 'summer-walk-sticker-with-tito-tigerz-transparent.png' },
  { title: 'TON 与点点', group: 'sticker', role: 'TON', image: IMG + 'ton-with-diandian-pet-cat-sticker-transparent.png' },
  { title: '周六合照', group: 'life', role: 'Tito', image: IMG + 'saturday-photo-with-tito-tigerz-kayu.jpg' },
  { title: '生日庆祝', group: 'life', role: 'TigerZ', image: IMG + 'hbd-celebration-with-tito-and-tigerz.png' },
  { title: '小漫画', group: 'special', role: 'Team', image: IMG + 'little-comic-with-tito-tigerz-frank-kayu-and-tsuru-herself.png' },
  { title: '戏曲服装企划', group: 'special', role: 'Tito', image: IMG + 'chinese-opera-style-outfit-design-with-tito-tigerz.png' }
];

const state = {
  cart: JSON.parse(localStorage.getItem('tito-cart') || '[]'),
  favorites: JSON.parse(localStorage.getItem('tito-favorites') || '[]'),
  lightboxIndex: 0,
  galleryItems: gallery
};

function saveState() {
  localStorage.setItem('tito-cart', JSON.stringify(state.cart));
  localStorage.setItem('tito-favorites', JSON.stringify(state.favorites));
}

function setActiveNav() {
  const file = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    const isHome = file === '' || file === 'index.html';
    if ((isHome && href === 'index.html') || href === file) link.setAttribute('aria-current', 'page');
  });
}

function initTheme() {
  const saved = localStorage.getItem('tito-theme');
  if (saved === 'dark') document.body.classList.add('dark');
  $$('.theme-toggle').forEach((btn) => btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('tito-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }));
}

function initMenu() {
  const menu = $('.nav-links');
  $$('.menu-button').forEach((button) => button.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
  }));
}

function updateCartCount() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  $$('.cart-count').forEach((el) => { el.textContent = String(count); });
}

function addToCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id, qty: 1 });
  saveState();
  updateCartCount();
  renderCart();
  openDrawer();
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) state.favorites = state.favorites.filter((item) => item !== id);
  else state.favorites.push(id);
  saveState();
  renderProducts();
}

function openDrawer() { $('.drawer')?.classList.add('open'); }
function closeDrawer() { $('.drawer')?.classList.remove('open'); }
function closeModal() { $('.modal')?.classList.remove('open'); }
function closeLightbox() { $('.lightbox')?.classList.remove('open'); }

function renderCart() {
  const list = $('.cart-items');
  if (!list) return;
  if (!state.cart.length) {
    list.innerHTML = '<p class="lead">购物车还是空的。先慢慢看，遇到喜欢的再放进来。</p>';
  } else {
    list.innerHTML = state.cart.map((line) => {
      const item = products.find((p) => p.id === line.id);
      return `<article class="cart-item"><img src="${item.image}" alt="${item.name}"><div><strong>${item.name}</strong><p>¥${item.price} × ${line.qty}</p></div><button class="icon-button" data-remove="${item.id}" aria-label="移除 ${item.name}">×</button></article>`;
    }).join('');
  }
  const total = state.cart.reduce((sum, line) => {
    const item = products.find((p) => p.id === line.id);
    return sum + item.price * line.qty;
  }, 0);
  $('.cart-total')?.replaceChildren(document.createTextNode(`¥${total}`));
  $$('[data-remove]').forEach((btn) => btn.addEventListener('click', () => {
    state.cart = state.cart.filter((line) => line.id !== btn.dataset.remove);
    saveState();
    updateCartCount();
    renderCart();
  }));
}

function productCard(item) {
  const fav = state.favorites.includes(item.id);
  return `<article class="card product-card" data-role="${item.role}" data-type="${item.type}" data-price="${item.price}">
    <div class="card-media tall"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
    <div class="card-pad product-info">
      <div class="tags"><span class="tag">${item.role}</span><span class="tag">${typeLabel(item.type)}</span></div>
      <h3>${item.name}</h3>
      <p>${item.note}</p>
      <div class="price-row"><span class="price">¥${item.price}</span><button class="icon-button" data-fav="${item.id}" aria-label="收藏 ${item.name}">${fav ? '★' : '☆'}</button></div>
      <div class="product-actions"><button class="text-button primary-button" data-add="${item.id}">加入购物车</button><button class="icon-button" data-view="${item.id}" aria-label="查看 ${item.name}">i</button></div>
    </div>
  </article>`;
}

function typeLabel(type) {
  return ({ stand: '立牌', sticker: '贴纸', badge: '徽章', set: '组合' })[type] || type;
}

function renderProducts() {
  const grid = $('.product-grid');
  if (!grid) return;
  const type = $('.type-filter')?.value || 'all';
  const role = $('.role-filter')?.value || 'all';
  const sort = $('.sort-filter')?.value || 'featured';
  let items = [...products];
  if (type !== 'all') items = items.filter((item) => item.type === type);
  if (role !== 'all') items = items.filter((item) => item.role === role);
  if (sort === 'price-asc') items.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') items.sort((a, b) => b.price - a.price);
  grid.innerHTML = items.map(productCard).join('') || '<p class="lead">这一格暂时没有商品，换个筛选看看。</p>';
  $$('[data-add]').forEach((btn) => btn.addEventListener('click', () => addToCart(btn.dataset.add)));
  $$('[data-fav]').forEach((btn) => btn.addEventListener('click', () => toggleFavorite(btn.dataset.fav)));
  $$('[data-view]').forEach((btn) => btn.addEventListener('click', () => openProduct(btn.dataset.view)));
}

function openProduct(id) {
  const item = products.find((p) => p.id === id);
  const modal = $('.modal');
  if (!item || !modal) return;
  $('.modal-title').textContent = item.name;
  $('.modal-body').innerHTML = `<img src="${item.image}" alt="${item.name}"><div class="product-info"><div class="tags"><span class="tag active">${item.role}</span><span class="tag">${typeLabel(item.type)}</span></div><p class="lead">${item.note}</p><p>建议搭配同角色头像徽章或贴纸，陈列时会更像一个完整的小角落。</p><div class="price-row"><span class="price">¥${item.price}</span><button class="text-button primary-button" data-add="${item.id}">加入购物车</button></div></div>`;
  modal.classList.add('open');
  $('[data-add]', modal).addEventListener('click', () => addToCart(item.id));
}

function galleryCard(item, index) {
  return `<button class="gallery-card" data-gallery-index="${index}" data-group="${item.group}" data-role="${item.role}">
    <span class="card-media ${item.group === 'life' ? 'cover' : ''}"><img src="${item.image}" alt="${item.title}" loading="lazy"></span>
    <span class="gallery-caption"><strong>${item.title}</strong><span>${galleryLabel(item.group)}</span></span>
  </button>`;
}

function galleryLabel(group) {
  return ({ sketch: '设定图', stand: '立绘', sticker: '贴纸', life: '生活碎片', special: '特别企划' })[group] || group;
}

function renderGallery() {
  const grid = $('.gallery-grid');
  if (!grid) return;
  const filter = $('.gallery-filter[aria-pressed="true"]')?.dataset.group || 'all';
  state.galleryItems = filter === 'all' ? gallery : gallery.filter((item) => item.group === filter);
  grid.innerHTML = state.galleryItems.map(galleryCard).join('');
  $$('[data-gallery-index]').forEach((btn) => btn.addEventListener('click', () => openLightbox(Number(btn.dataset.galleryIndex))));
}

function openLightbox(index) {
  const item = state.galleryItems[index];
  if (!item) return;
  state.lightboxIndex = index;
  $('.lightbox-title').textContent = item.title;
  $('.lightbox-meta').textContent = `${galleryLabel(item.group)} / ${item.role}`;
  $('.lightbox-media').innerHTML = `<img src="${item.image}" alt="${item.title}">`;
  $('.lightbox').classList.add('open');
}

function stepLightbox(direction) {
  if (!$('.lightbox')?.classList.contains('open')) return;
  const total = state.galleryItems.length;
  state.lightboxIndex = (state.lightboxIndex + direction + total) % total;
  openLightbox(state.lightboxIndex);
}

function initFilters() {
  $$('.type-filter, .role-filter, .sort-filter').forEach((el) => el.addEventListener('change', renderProducts));
  $$('.gallery-filter').forEach((btn) => btn.addEventListener('click', () => {
    $$('.gallery-filter').forEach((other) => other.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    renderGallery();
  }));
}

function initShell() {
  setActiveNav();
  initTheme();
  initMenu();
  updateCartCount();
  renderCart();
  renderProducts();
  renderGallery();
  initFilters();
  $$('.cart-open').forEach((btn) => btn.addEventListener('click', openDrawer));
  $$('[data-close="drawer"]').forEach((btn) => btn.addEventListener('click', closeDrawer));
  $$('[data-close="modal"]').forEach((btn) => btn.addEventListener('click', closeModal));
  $$('[data-close="lightbox"]').forEach((btn) => btn.addEventListener('click', closeLightbox));
  $$('.scrim').forEach((scrim) => scrim.addEventListener('click', () => { closeDrawer(); closeModal(); closeLightbox(); }));
  $('.lightbox-prev')?.addEventListener('click', () => stepLightbox(-1));
  $('.lightbox-next')?.addEventListener('click', () => stepLightbox(1));
  const top = $('.back-to-top');
  window.addEventListener('scroll', () => top?.classList.toggle('visible', window.scrollY > 600));
  top?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { closeDrawer(); closeModal(); closeLightbox(); }
    if (event.key === 'ArrowLeft') stepLightbox(-1);
    if (event.key === 'ArrowRight') stepLightbox(1);
  });
}

document.addEventListener('DOMContentLoaded', initShell);
