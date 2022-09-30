const debounce = require('lodash.debounce');
const DELAY = 2000;

const refsFavCock = {
  btnTransparent: document.querySelector(
    'body > main > section.catalogue.container > div > ul > li:nth-child(1) > div > div > button.btn__orange'
  ),
};

console.log(refsFavCock.btnTransparent);

// refsFavCock.btnTransparent.addEventListener(
//   'click',
//   onClickBtnFavoriteCocktails
// );

// refsFavCock.btnTransparent.addEventListener(
//   'click',
//   debounce(onClickBtnFavoriteCocktails, DELAY)
// );

// function onClickBtnFavoriteCocktails() {
//   console.log('hi');
// }
