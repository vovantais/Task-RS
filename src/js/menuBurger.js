const burger = document.querySelector('.header__toggle'),
  menu = document.querySelector('.header__menu');

function toggleMenu() {
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
  });
  document.addEventListener('click', (e) => {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == burger;
    const menu_is_active = menu.classList.contains('active');
    if (!its_menu && !its_btnMenu && menu_is_active) {
      menu.classList.toggle('active');
      burger.classList.toggle('active');
      document.body.classList.toggle('lock');
    }
  });
}
toggleMenu();
