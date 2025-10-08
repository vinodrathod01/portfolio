
var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
var address = protocol + window.location.host + window.location.pathname + '/ws';
var socket = new WebSocket(address);
socket.onmessage = function(msg) {
    if (msg.data == 'reload') window.location.reload();
    else if (msg.data == 'refreshcss') refreshCSS();
};









// ===== Hero Section Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = 0;
  hero.style.transform = "translateY(30px)";
  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 300);
});

// ===== Navbar Scroll Effect =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});



// ========= Contact section=======
document.querySelector('#contact form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page refresh
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if(name && email && message) {
    alert('Thank you! Your message has been sent.');
    this.reset(); // clear the form
  } else {
    alert('Please fill out all fields.');
  }
});






