const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    menu.classList.toggle('is-open', !isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      menu.classList.remove('is-open');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
