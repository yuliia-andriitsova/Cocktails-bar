const refsNav = {
  mainPage: document.querySelector('.main-page'),
  favoriteCocktailsPage: document.querySelector('.favorite-cocktails-page'),
  favoriteIngridientsPage: document.querySelector('.favorite-ingridients-page'),
  favoriteCocktailsBtn: document.querySelector(
    'body > header > div > div.header__favorite-box > ul > li:nth-child(1)'
  ),
  favoriteIngridientsBtn: document.querySelector(
    'body > header > div > div.header__favorite-box > ul > li:nth-child(2)'
  ),
  homeBtn: document.querySelector(
    'body > header > div > div.header__menu.header__menu--is-hidden > nav > ul > li.header__nav-item.header__nav-item--menu'
  ),
};

refsNav.favoriteCocktailsBtn.addEventListener(
  'click',
  onClickFavoriteCocktailsBtn
);
refsNav.favoriteIngridientsBtn.addEventListener(
  'click',
  onClickFavoriteIngridientsBtn
);
refsNav.homeBtn.addEventListener('click', onClickHomeBtn);

function onClickHomeBtn() {
  refsNav.favoriteCocktailsPage.classList.add('hidden-page');
  refsNav.mainPage.classList.remove('hidden-page');
  refsNav.favoriteIngridientsPage.classList.add('hidden-page');
}
function onClickFavoriteCocktailsBtn() {
  refsNav.favoriteCocktailsPage.classList.remove('hidden-page');
  refsNav.mainPage.classList.add('hidden-page');
  refsNav.favoriteIngridientsPage.classList.add('hidden-page');
}
function onClickFavoriteIngridientsBtn() {
  refsNav.favoriteCocktailsPage.classList.add('hidden-page');
  refsNav.mainPage.classList.add('hidden-page');
  refsNav.favoriteIngridientsPage.classList.remove('hidden-page');
}
