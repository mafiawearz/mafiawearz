// Play intro sound and show animation
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  const main = document.getElementById('mainContent');
  const audio = new Audio('intro.mp3'); // Make sure intro.mp3 is in your repo

  audio.play();
  intro.style.display = 'block';

  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
  }, 7000);
});

// Reveal product section
function showProducts() {
  document.getElementById('productSection').style.display = 'flex';
  document.getElementById('seeProductsBtn').style.display = 'none';
}

// Show customization options for selected product
function customize(productName) {
  const modal = document.getElementById('customizeModal');
  document.getElementById('selectedProduct').innerText = productName;
  modal.style.display = 'block';
}

// Close modal
function closeModal() {
  document.getElementById('customizeModal').style.display = 'none';
}
