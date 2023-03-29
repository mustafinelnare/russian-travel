let page = document.querySelector('.page');
let themeButton = document.querySelector('.header__button');

themeButton.onclick = function() {
  page.classList.toggle('theme-light');
  page.classList.toggle('theme-dark');
};
