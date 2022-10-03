const { data } = require('infinite-scroll');

const catalogueListFavoriteCocktails = document.querySelector(
  'body > main > div.favorite-cocktails-page > section > div > ul'
);
// console.log(catalogueListFavoriteCocktails);

// Створюємо масив, який забирає масив із локал сторедж або пустий
let favoriteCocktailsEl = JSON.parse(localStorage.savedCocktails || '[]');

const catalogueListRef = document.querySelector('.catalogue__list');

if (catalogueListRef) {
  catalogueListRef.addEventListener('mousedown', onClickBtn);
}

let randomCardsGallery = '';
let htmlCoctailCard = '';

function onClickBtn(e) {
  if (e.target.classList.contains('btn__transparent')) {
    let BtnToFavoriteCocktails = '';
    randomCardsGallery = catalogueListRef.children;
    e.target.childNodes[0].data = 'Remove';
    console.log(e.target);

    for (let i = 0; i < randomCardsGallery.length; i++) {
      BtnToFavoriteCocktails =
        randomCardsGallery[i].children[1].children[1].children[1];

      BtnToFavoriteCocktails.addEventListener('click', allCocktailsMap);

      function allCocktailsMap() {
        htmlCoctailCard = new XMLSerializer().serializeToString(
          randomCardsGallery[i]
        );
        // console.log(htmlCoctailCard);
        if (!favoriteCocktailsEl.includes(htmlCoctailCard)) {
          favoriteCocktailsEl.push(htmlCoctailCard);
          // console.log(favoriteCocktailsEl);
          catalogueListFavoriteCocktails.insertAdjacentHTML(
            'beforeend',
            htmlCoctailCard
          );
        }
        localStorage.setItem(
          'savedCocktails',
          JSON.stringify(favoriteCocktailsEl)
        );
      }
    }
  }
}

const savedCocktailsDataLS = localStorage.getItem('savedCocktails');
const parsedCocktailsDataLS = JSON.parse(savedCocktailsDataLS).join('');

catalogueListFavoriteCocktails.insertAdjacentHTML(
  'beforeend',
  parsedCocktailsDataLS
);

//                          ----- Remove Button -----

if (catalogueListFavoriteCocktails) {
  catalogueListFavoriteCocktails.addEventListener('click', onClickBtn);
}
let htmlRemoveCoctailCard = '';
function onClickBtn(e) {
  const cardToRemove = e.target.parentElement.parentElement.parentElement;
  if (e.target.classList.contains('btn__transparent')) {
    htmlRemoveCoctailCard = new XMLSerializer().serializeToString(cardToRemove);

    let indexForRemoveCocktailCard = favoriteCocktailsEl.indexOf(
      htmlRemoveCoctailCard
    );

    if (favoriteCocktailsEl.includes(htmlRemoveCoctailCard)) {
      favoriteCocktailsEl.splice(indexForRemoveCocktailCard, 1);
      console.log(favoriteCocktailsEl);
      catalogueListFavoriteCocktails.insertAdjacentHTML('beforeend', '');
      localStorage.setItem(
        'savedCocktails',
        JSON.stringify(favoriteCocktailsEl)
      );
    }
  }
}

console.log(catalogueListFavoriteCocktails);
