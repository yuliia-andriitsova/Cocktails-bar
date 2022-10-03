const catalogueListFavoriteCocktails = document.querySelector(
  'body > main > div.favorite-cocktails-page > section > div > ul'
);

// Створюємо масив, який забирає масив із локал сторедж або пустий
let favoriteCocktailsEl = JSON.parse(localStorage.savedCocktails || '[]');

const catalogueListRef = document.querySelector('.catalogue__list');

if (catalogueListRef) {
  catalogueListRef.addEventListener('click', onClickBtn);
}

function onClickBtn(e) {
  if (e.target.classList.contains('btn__transparent')) {
    const refsFav = {
      addToFav: document.querySelectorAll('.catalogue__item'),
    };

    const allCocktailsEl = refsFav.addToFav;

    let BtnToFavoriteCocktails = '';

    function allCocktailsMap() {
      for (let i = 0; i < allCocktailsEl.length - 1; i++) {
        BtnToFavoriteCocktails =
          allCocktailsEl[i].children[1].children[1].children[1];

        // BtnToFavoriteCocktails.firstChild.data = 'Remove';
        // console.dir(BtnToFavoriteCocktails.firstChild.data);

        BtnToFavoriteCocktails.addEventListener(
          'click',
          onClickBtnToAddFavoriteCocktails
        );

        function onClickBtnToAddFavoriteCocktails() {
          // BtnToFavoriteCocktails.firstChild.data = 'Remove';
          // console.log(BtnToFavoriteCocktails.firstChild.data);

          // Перетворюємо html код в строку
          let htmlCoctailCard = new XMLSerializer().serializeToString(
            allCocktailsEl[i]
          );
          // BtnToFavoriteCocktails.firstChild.data = 'Remove';
          // Перевірка, якщо наш масив не містить карту то пушим карту + рендерим
          if (!favoriteCocktailsEl.includes(htmlCoctailCard)) {
            favoriteCocktailsEl.push(htmlCoctailCard);
            catalogueListFavoriteCocktails.insertAdjacentHTML(
              'beforeend',
              htmlCoctailCard
            );
          }
          // Створюємо локальне сховище, передаємо туда масив
          localStorage.setItem(
            'savedCocktails',
            JSON.stringify(favoriteCocktailsEl)
          );
        }
      }
    }
    allCocktailsMap();
  }
}

let savedCocktailsDataLS = localStorage.getItem('savedCocktails');
let parsedCocktailsDataLS = JSON.parse(savedCocktailsDataLS).join('');

catalogueListFavoriteCocktails.insertAdjacentHTML(
  'beforeend',
  parsedCocktailsDataLS
);
