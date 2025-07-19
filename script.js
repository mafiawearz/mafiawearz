// script.js

window.onload = function () { const intro = document.querySelector('.intro'); const container = document.querySelector('.container'); const products = document.querySelector('.products'); const customization = document.querySelector('.customization'); const seeProductsBtn = document.getElementById('seeProducts'); const tShirt = document.getElementById('tshirt'); const oversized = document.getElementById('oversized'); const hoodie = document.getElementById('hoodie'); const backBtn = document.getElementById('backToProducts');

setTimeout(() => { intro.style.display = 'none'; container.style.display = 'block'; }, 7000); // 7 sec intro

seeProductsBtn.onclick = () => { container.style.display = 'none'; products.style.display = 'block'; };

const showCustomization = () => { products.style.display = 'none'; customization.style.display = 'block'; };

tShirt.onclick = showCustomization; oversized.onclick = showCustomization; hoodie.onclick = showCustomization;

backBtn.onclick = () => { customization.style.display = 'none'; products.style.display = 'block'; }; };

