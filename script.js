function showSurprise() {
    var surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");
  }




// ❤️ Floating Hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.getElementById('hearts-container').appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 300);