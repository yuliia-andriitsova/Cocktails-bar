const { data } = require('infinite-scroll');

const catalogueListFavoriteCocktails = document.querySelector(
  'body > main > div.favorite-cocktails-page > section > div > ul'
);

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
    randomCardsGallery = catalogueListRef.children; // Отримуємо масив карток

    for (let i = 0; i < randomCardsGallery.length; i++) {
      BtnToFavoriteCocktails = // Визначаємо де кнопка
        randomCardsGallery[i].children[1].children[1].children[1];

      BtnToFavoriteCocktails.addEventListener('click', allCocktailsMap); // Слухач по кліку

      function allCocktailsMap() {
        console.log(htmlCoctailCard);
        // Серіалізуємо в стрінгу
        htmlCoctailCard = new XMLSerializer().serializeToString(
          randomCardsGallery[i] // Масив об'єктів
        );
        // Перевірка якщо елемент не є в масиві
        if (!favoriteCocktailsEl.includes(htmlCoctailCard)) {
          favoriteCocktailsEl.push(htmlCoctailCard); // Пушим його в масив

          // Добавляєм його в розмітку
          catalogueListFavoriteCocktails.insertAdjacentHTML(
            'beforeend',
            htmlCoctailCard
          );
        }
        if (favoriteCocktailsEl.includes(htmlCoctailCard)) {
          e.target.childNodes[0].data = 'Remove'; // При натисканні на кнопку заміняємо слова
        }

        // Добавляєм масив в локальне сховище
        localStorage.setItem(
          'savedCocktails',
          JSON.stringify(favoriteCocktailsEl)
        );
      }
    }
  }
}

//  Зберігаєм елементи в локальному сховищі при загрузці сторінки
const savedCocktailsDataLS = localStorage.getItem('savedCocktails');
const parsedCocktailsDataLS = JSON.parse(savedCocktailsDataLS).join('');

catalogueListFavoriteCocktails.insertAdjacentHTML(
  'beforeend',
  parsedCocktailsDataLS
);

//                          ----- Remove Button -----

if (catalogueListFavoriteCocktails) {
  catalogueListFavoriteCocktails.addEventListener('click', onRemoveItemBtn);
}
let htmlRemoveCoctailCard = '';
console.log(htmlCoctailCard);

function onRemoveItemBtn(e) {
  // Отримуємо доступ до картки яку необхідно видалити
  const cardToRemove = e.target.parentElement.parentElement.parentElement;

  if (e.target.classList.contains('btn__transparent')) {
    // Серіалізація до стрінги
    htmlRemoveCoctailCard = new XMLSerializer().serializeToString(cardToRemove);
    // Визначаємо індекс видаляємого елементу
    let indexForRemoveCocktailCard = favoriteCocktailsEl.indexOf(
      htmlRemoveCoctailCard
    );

    // Якщо масив включає видаляємий об'єкт видаляємо по індексу(Splice)
    if (favoriteCocktailsEl.includes(htmlRemoveCoctailCard)) {
      favoriteCocktailsEl.splice(indexForRemoveCocktailCard, 1);

      // Видаляємо картку з батьківського елементу
      cardToRemove.remove();
      // Видаляємо об'єкт з масиву в локальному сховищу
      localStorage.setItem(
        'savedCocktails',
        JSON.stringify(favoriteCocktailsEl)
      );
    }
    if (!favoriteCocktailsEl.includes(htmlRemoveCoctailCard)) {
      e.target.childNodes[0].data = 'Add to'; // При натисканні на кнопку заміняємо слова
    }
  }
}
