document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      alert('Item added to cart!');
      // You can also implement further logic for updating a cart here.
    });
  });