document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const word = document.querySelector("h1");
  const rainDrop = document.querySelector(".rain-drop");

  setTimeout(() => {
    flower.style.display = "inherit";
    word.style.display = "none";
  }, 2000);
});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain";
  rainDrop.style.left = `${xPosition}px`;
  rainDrop.style.animationDelay = `${delay}s`;
  rainDrop.style.animationDuration = `${duration}s`;
  rainDrop.style.display = "none";
  body.appendChild(rainDrop);

  setTimeout(() => {
    rainDrop.style.display = "inherit";
  }, 800);
}

setInterval(createRaindrop, 100);

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman form default

  // Lakukan validasi login di sini
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Untuk tujuan demonstrasi, kita anggap login selalu berhasil
  if (username && password) {
    // Alihkan ke index1.html setelah login berhasil
    window.location.href = 'index1.html';
  } else {
    alert('Username atau password tidak valid');
  }
});
