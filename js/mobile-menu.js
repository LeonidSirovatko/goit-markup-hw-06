(() => {
  const menuBtnOpen = document.querySelector('[data-menu-open]');
  const menuBtnClose = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-menu]');

  if (menuBtnOpen && menuBtnClose && mobileMenu) {
    const toggleMenu = () => {
      mobileMenu.classList.toggle('is-open');
      document.body.classList.toggle('menu-open'); // Блокирует скролл сайта под меню
    };

    menuBtnOpen.addEventListener('click', toggleMenu);
    menuBtnClose.addEventListener('click', toggleMenu);
  }
})();
