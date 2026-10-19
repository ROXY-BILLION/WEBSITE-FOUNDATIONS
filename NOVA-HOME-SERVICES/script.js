const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const backToTop = document.querySelector('.back-to-top');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const currentYear = document.getElementById('current-year');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');

  const isOpen = navLinks.classList.contains('active');

  menuToggle.setAttribute('aria-expanded', isOpen);
});

const navItems = navLinks.querySelectorAll('a');

navItems.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

currentYear.textContent = new Date().getFullYear();

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  formMessage.textContent =
    'Thank you! Your message has been received in this demo.';

  formMessage.style.color = '#176b52';

  contactForm.reset();
});
