const addToCartButton = document.querySelector('.add-to-cart');
const popup = document.querySelector('.cart-popup');

// Stap 2: Voeg een click-eventlistener toe aan de knop
addToCartButton.addEventListener('click', () => {
  // Stap 3: Toon de popup
  popup.classList.remove('hidden');
  popup.classList.add('show');

  // Stap 4: Verberg de popup automatisch na 2 seconden
  setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');
  }, 2000);
});