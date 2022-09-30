const refsTheme = {
  body: document.querySelector('body'),
  themeBox: document.querySelector('.header__color-theme-box__switch'),
  themeBall: document.querySelector('.header__color-theme-box__switch-ball'),
  searchInput: document.querySelector('.header__input'),
  paragraphText: document.querySelectorAll('p'),
  headerTextPr: document.querySelector('h1'),
  headerTextSec: document.querySelectorAll('h2'),
  headerTextQua: document.querySelectorAll('h3'),
  textLight: document.querySelector(
    'body > header > div > div.header__color-theme-box > span.header__color-theme-box-text.header__color-theme-box-text--light'
  ),
  textDark: document.querySelector(
    'body > header > div > div.header__color-theme-box > span.header__color-theme-box-text.header__color-theme-box-text--dark'
  ),

  headerMenu: document.querySelector('.header__menu'),
  headerIconMenuClose: document.querySelector('.header__icon-menu--close'),
  headerIconMenuOpen: document.querySelector('.header__icon-menu'),
  headerNavText: document.querySelector('.header__nav-text'),
  headerNavTextBtn: document.querySelector('.header__nav-text--btn'),
  headerFavoriteBoxText: document.querySelector('.header__favorite-box__text'),
  headerFavoriteBoxText2: document.querySelector(
    '.header__favorite-box__text-2'
  ),
  mainBgColor: document.querySelector('.hero'),
  heroSearchMobile: document.querySelector('.hero__search-mobile'),
  selectBtn: document.querySelector('.select__btn'),
  // selectItem: document.querySelectorAll('.select__item'),
  hCocktails: document.querySelector(
    'body > main > section.catalogue.container > div > h2'
  ),
  catalogueTitle: document.querySelector(
    'body > main > section:nth-child(3) > h2'
  ),
  heroSearchTitle: document.querySelector('.hero__search'),
  selectItem: document.querySelectorAll(
    'body > main > section.hero.container > div > div > div'
  ),
};

refsTheme.themeBox.addEventListener('click', changeThemeOnClick);

function changeThemeOnClick() {
  const settings = {
    toddler: refsTheme.themeBall.classList.toggle('ball-right'),
    toddlerText: `refsTheme.themeBall.classList.toggle('ball-right')`,
  };
  nightTheme();
  localStorage.setItem('settings', JSON.stringify(settings));
  if (settings.toddler === false) {
    dayTheme();
  }
}

const getSettings = localStorage.getItem('settings');
const getParsedSettings = JSON.parse(getSettings);

if (getParsedSettings.toddler === true) {
  eval(getParsedSettings.toddlerText);
  nightTheme();
} else {
  dayTheme();
}

function dayTheme() {
  refsTheme.body.style.backgroundColor = '';
  refsTheme.themeBall.style.backgroundColor = '';
  refsTheme.themeBox.style.backgroundColor = '';
  refsTheme.searchInput.style.backgroundColor = '';
  refsTheme.searchInput.style.color = '';
  refsTheme.themeBox.style.borderColor = '';
  refsTheme.textLight.style.color = '';
  refsTheme.textDark.style.color = '';
  refsTheme.headerMenu.style.backgroundColor = '';
  refsTheme.headerIconMenuClose.style.fill = '';
  refsTheme.headerIconMenuOpen.style.fill = '';
  refsTheme.headerNavText.style.color = '';
  refsTheme.headerNavTextBtn.style.color = '';
  refsTheme.headerFavoriteBoxText.style.color = '';
  refsTheme.headerFavoriteBoxText2.style.color = '';
  refsTheme.mainBgColor.style.backgroundColor = '';
  refsTheme.heroSearchMobile.style.color = '';
  refsTheme.selectBtn.style.backgroundColor = '';
  refsTheme.hCocktails.style.color = '';
  refsTheme.catalogueTitle.style.color = '';
  refsTheme.heroSearchTitle.style.color = '';
  function changeColorOfSelectItem(i) {
    for (let i = 0; i < refsTheme.selectItem.length; i++) {
      refsTheme.selectItem[i].style.color = '#000';
    }
  }
  changeColorOfSelectItem(refsTheme.selectItem);
}

function nightTheme() {
  refsTheme.body.style.backgroundColor = '#202025';
  refsTheme.themeBall.style.backgroundColor = '#ffffff';
  refsTheme.themeBox.style.backgroundColor = '#fd5103';
  refsTheme.themeBox.style.borderColor = '#ffffff';
  refsTheme.searchInput.style.backgroundColor = '#202025';
  refsTheme.searchInput.style.color = '#ffffff';
  refsTheme.textLight.style.color = '#ffffff';
  refsTheme.textDark.style.color = '#fd5103';
  refsTheme.headerMenu.style.backgroundColor = '#202025';
  refsTheme.headerIconMenuClose.style.fill = '#FCFCFC';
  refsTheme.headerIconMenuOpen.style.fill = '#FCFCFC';
  refsTheme.headerNavText.style.color = '#ffffff';
  refsTheme.headerNavTextBtn.style.color = '#ffffff';
  refsTheme.headerFavoriteBoxText.style.color = '#ffffff';
  refsTheme.headerFavoriteBoxText2.style.color = '#ffffff';
  refsTheme.mainBgColor.style.backgroundColor = '#202025';
  refsTheme.heroSearchMobile.style.color = '#FCFCFC';
  refsTheme.selectBtn.style.backgroundColor = '#202025';
  refsTheme.hCocktails.style.color = '#FCFCFC';
  refsTheme.catalogueTitle.style.color = '#FCFCFC';
  refsTheme.heroSearchTitle.style.color = '#FCFCFC';
  function changeColorOfSelectItem(i) {
    for (let i = 0; i < refsTheme.selectItem.length; i++) {
      refsTheme.selectItem[i].style.color = '#5F6775';
    }
  }
  changeColorOfSelectItem(refsTheme.selectItem);
}
