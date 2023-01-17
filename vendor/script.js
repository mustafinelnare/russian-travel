let page = document.querySelector('.page');
let themeButton = document.querySelector('.popup__button');

themeButton.onclick = function() {
  page.classList.toggle('theme-light');
  page.classList.toggle('theme-dark');
};

const popupBtnOpen = document.querySelector('.header__settings');
const popupContainer = document.querySelector('.popup');
const popupBtnClose = document.querySelector('.popup__close-button')

popupBtnOpen.addEventListener('click', openPopup);
popupBtnClose.addEventListener('click', closePopup);

function openPopup() {
  popupContainer.classList.add('popup__is-opened');
}

function closePopup() {
  popupContainer.classList.remove('popup__is-opened');
}

popupContainer.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});
