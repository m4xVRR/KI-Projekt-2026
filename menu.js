// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');
const body = document.body;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('menu-open');
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Page navigation
const navItems = document.querySelectorAll('nav a[data-page]');
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const page = item.getAttribute('data-page');
    showPage(page);
  });
});

// Page navigation for buttons
const pageButtons = document.querySelectorAll('a[data-page]:not(nav a)');
pageButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const page = button.getAttribute('data-page');
    showPage(page);
  });
});

function showPage(pageName) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected section
  const selectedSection = document.getElementById(pageName);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }
}

// Show home page on initial load
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});
