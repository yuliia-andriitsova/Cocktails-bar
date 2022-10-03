// const catalogueListFavoriteCocktails = document.querySelector(
//   'body > main > div.favorite-cocktails-page > section > div > ul'
// );

// // Створюємо масив, який забирає масив із локал сторедж або пустий
// let favoriteCocktailsEl = JSON.parse(localStorage.savedCocktails || '[]');

// setTimeout(() => {
//   const refsFav = {
//     addToFav: document.querySelectorAll('.catalogue__list > .catalogue__item'),
//   };

//   const allCocktailsEl = refsFav.addToFav;

//   let BtnToFavoriteCocktails = '';

//   function allCocktailsMap() {
//     for (let i = 0; i < allCocktailsEl.length - 1; i++) {
//       BtnToFavoriteCocktails =
//         allCocktailsEl[i].children[1].children[1].children[1];
//       // console.log(allCocktailsEl[i]);

//       BtnToFavoriteCocktails.addEventListener(
//         'click',
//         onClickBtnToAddFavoriteCocktails
//       );

//       function onClickBtnToAddFavoriteCocktails() {
//         // Перетворюємо html код в строку
//         let htmlCoctailCard = new XMLSerializer().serializeToString(
//           allCocktailsEl[i]
//         );
//         console.log(htmlCoctailCard);

//         // Перевірка, якщо наш масив не містить карту то пушим карту + рендерим
//         if (!favoriteCocktailsEl.includes(htmlCoctailCard)) {
//           favoriteCocktailsEl.push(htmlCoctailCard);
//           catalogueListFavoriteCocktails.insertAdjacentHTML(
//             'beforeend',
//             htmlCoctailCard
//           );
//         }
//         // Створюємо локальне сховище, передаємо туда масив
//         localStorage.setItem(
//           'savedCocktails',
//           JSON.stringify(favoriteCocktailsEl)
//         );
//       }
//     }
//   }
//   allCocktailsMap();
// }, 4000);

// let savedCocktailsDataLS = localStorage.getItem('savedCocktails');
// let parsedCocktailsDataLS = JSON.parse(savedCocktailsDataLS).join('');
// // console.log(parsedCocktailsDataLS);
// // console.log(localStorage.savedCocktails);

// catalogueListFavoriteCocktails.insertAdjacentHTML(
//   'beforeend',
//   parsedCocktailsDataLS
// );

// ---------------------------------------------------------

// // Створюємо масив, який забирає масив із локал сторедж або пустий
// let favoriteCocktailsEl = JSON.parse(localStorage.savedCocktails || '[]');

// const catalogueListRef = document.querySelector('.catalogue__list');

// if (catalogueListRef) {
//   catalogueListRef.addEventListener('mousedown', onClickBtn);
// }

// function onClickBtn(e) {
//   console.dir(catalogueListRef);
//   console.log(catalogueListRef.children);
//   let BtnToFavoriteCocktails = '';
//   const randomCardsGallery = catalogueListRef.children;
//       for (let i = 0; i < randomCardsGallery.length; i++) {
//         BtnToFavoriteCocktails =
//           catalogueListRef[i];
//         console.log(randomCardsGallery[i])
// }

// ---------------------------------------------------------
