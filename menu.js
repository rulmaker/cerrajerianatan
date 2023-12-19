document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav__links');
    const overlay = document.querySelector('.overlay');
  
    burgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show');
      overlay.classList.toggle('show');
    });
  
    // Cerrar el menú al hacer clic en un enlace
    navLinks.addEventListener('click', function () {
      navLinks.classList.remove('show');
      overlay.classList.remove('show');
    });
  
    // Cerrar el menú al hacer clic en el fondo oscuro
    overlay.addEventListener('click', function () {
      navLinks.classList.remove('show');
      overlay.classList.remove('show');
    });
  });
  
