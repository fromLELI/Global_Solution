const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  const overlay = square.querySelector('.overlay');

  square.addEventListener('click', () => {
    overlay.classList.toggle('active');
  });
});
