const refsFavorite = {
  favoriteMenu: document.querySelector('.header__favorite-box'),
  favoriteBtn: document.querySelector('.header__nav-text--btn'),
};

refsFavorite.favoriteBtn.addEventListener('mousemove', onFavoriteBtnClick);

function onFavoriteBtnClick() {
  refsFavorite.favoriteMenu.classList.toggle('header__favorite-box--is-hidden');
}
