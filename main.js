"use strict";

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    if (window.scrollY > 50) navbar.classList.add("navbar-scrolled");
    else navbar.classList.remove("navbar-scrolled");
});

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function updateFavCount() {
    const el = document.getElementById("fav-count");
    if (!el) return;
    el.textContent = favorites.length;
}

function updateHeartsUI() {
    const heartButtons = document.querySelectorAll("[data-fav]");

    heartButtons.forEach(btn => {
        const name = btn.getAttribute("data-fav");

        if (favorites.includes(name)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function toggleFavorite(name) {
    if (favorites.includes(name)) {
        favorites = favorites.filter(n => n !== name);
    } else {
        favorites.push(name);
    }

    saveFavorites();
    updateFavCount();
    updateHeartsUI();
    renderFavorites();
}

function renderFavorites() {
    const container = document.getElementById("fav-items");
    if (!container) return;

    if (favorites.length === 0) {
        container.innerHTML = `<p class="text-muted">Nessun preferito al momento.</p>`;
        return;
    }

    container.innerHTML = favorites.map((name, index) => `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <span>${name}</span>
      <button class="btn btn-sm btn-outline-danger" type="button" onclick="removeFavorite(${index})">
        Rimuovi
      </button>
    </div>
  `).join("");
}

function removeFavorite(index) {
    favorites.splice(index, 1);
    saveFavorites();
    updateFavCount();
    updateHeartsUI();
    renderFavorites();
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Aggiunta prodotto
function addToCart(name, price) {

    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name,
            price,
            quantity: 1
        });
    }

    saveCart();
    renderCart();

    const toastEl = document.getElementById("cartToast");
    if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

// Salvataggio
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Aggiorna badge
function updateCartCount() {
    const el = document.getElementById("cart-count");
    if (!el) return;

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    el.textContent = totalItems;
}

// Render carrello
function renderCart() {

    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");
    if (!container || !totalEl) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        container.innerHTML += `
  <div class="mb-3">
    <p class="mb-1 fw-bold">${item.name}</p>

    <div class="d-flex align-items-center justify-content-between">
      <small>€ ${item.price.toFixed(2)}</small>

      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-sm btn-outline-secondary" onclick="decreaseQty(${index})">−</button>
        <span class="fw-bold">${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary" onclick="increaseQty(${index})">+</button>
      </div>
    </div>

    <small class="d-block mt-1">Subtotale: € ${(item.price * item.quantity).toFixed(2)}</small>

    <button class="btn btn-sm btn-outline-danger mt-2" onclick="removeFromCart(${index})">
      Rimuovi
    </button>
  </div>
`;
    });

    totalEl.textContent = total.toFixed(2);

    updateCartCount();
}

// Rimuovi prodotto
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function increaseQty(index) {
    cart[index].quantity++;
    saveCart();
    renderCart();
}

function decreaseQty(index) {
    cart[index].quantity--;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // se scende a 0, rimuove il prodotto
    }

    saveCart();
    renderCart();
}

// Svuota carrello
const clearCartBtn = document.getElementById("clear-cart");
if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
        cart = [];
        saveCart();
        renderCart();
    });
}

const clearFavBtn = document.getElementById("clear-fav");
if (clearFavBtn) {
    clearFavBtn.addEventListener("click", () => {
        favorites = [];
        saveFavorites();
        updateFavCount();
        updateHeartsUI();
        renderFavorites();
    });
}

const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Il carrello è vuoto.");
            return;
        }

        alert("Checkout simulato ✅");
    });
}

// Inizializzazione
renderCart();
updateFavCount();
updateHeartsUI();
renderFavorites();