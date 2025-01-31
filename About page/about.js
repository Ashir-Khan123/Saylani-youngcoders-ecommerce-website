const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.getElementById('language').addEventListener('change', function() {
  const selectedLanguage = this.value;
  alert(`Language changed to: ${selectedLanguage}`);
});
document.querySelector('.subscribe-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Subscription successful!');
});