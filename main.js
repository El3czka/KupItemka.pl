function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const count = document.getElementById('cart-count');
  if (count) count.textContent = cart.length;
}

function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(item + ' dodano do koszyka!');
  updateCartCount();
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const container = document.getElementById('cart-container');
  if (!container) return;

  const count = document.getElementById('cart-count');
  if (count) count.textContent = cart.length;

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<div class="empty">Twój koszyk jest pusty.</div>';
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item}</span>
      <button class="remove-btn" onclick="removeItem(${index})">Usuń</button>
    `;
    container.appendChild(div);
  });
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}
