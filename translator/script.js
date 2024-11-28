// JavaScript for Click Interaction
document.getElementById('cta-button').addEventListener('click', function () {
  alert('Thanks for clicking! Enjoy the animations 😊');
});

// Add event listener for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
