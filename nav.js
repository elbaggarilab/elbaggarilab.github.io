// Shared nav hamburger
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Mark active nav link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => {
    if (window.location.pathname.startsWith(new URL(a.href, location.origin).pathname) &&
        new URL(a.href, location.origin).pathname !== '/') {
      a.classList.add('active');
    }
    if (window.location.pathname === '/' && a.getAttribute('href') === 'index.html') {
      a.classList.add('active');
    }
  });
});
