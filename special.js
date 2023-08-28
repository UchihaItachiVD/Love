function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(heart);

  setTimeout(() => {
      heart.remove();
  }, 5000); // Adjust the time here if needed
}

setInterval(() => {
  createHeart();
}, 1000); // Create a heart every second
