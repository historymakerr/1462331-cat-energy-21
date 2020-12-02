const headerMenu = document.querySelector('.header__menu'),
  headerInner = document.querySelector('.header__inner');

headerMenu.classList.remove('header__menu--no-js');headerInner.classList.remove('header__inner--no-js');

const menuButton = document.querySelector('.header__menu-open'),
  menuList = document.querySelector('.header__menu-list');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('header__menu-list--show');
  menuButton.classList.toggle('header__menu-open--active');
});



const beforeButton = document.querySelector('.example__demo-button--before'),
  afterButton = document.querySelector('.example__demo-button--after'),
  progressBar = document.querySelector('.example__demo-runner-progress'),
  catImage = document.querySelector('.example__demo-img');

beforeButton.addEventListener('click', () => {
  progressBar.classList.remove('example__demo-runner-progress--after');
  catImage.src = 'img/example-cat.png';
});
afterButton.addEventListener('click', () => {
  progressBar.classList.add('example__demo-runner-progress--after');
  catImage.src = 'img/example-cat-after.png';
});
