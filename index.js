document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const burgerMenu = document.getElementById('burger-menu');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;

    // Закрытие бургер-меню при скроллинге
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      overlay.classList.remove('active');
    }
  });

  burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });
});