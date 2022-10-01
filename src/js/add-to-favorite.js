const catalogueListFavoriteCocktails = document.querySelector(
  'body > main > div.favorite-cocktails-page > section > div > ul'
);

setTimeout(() => {
  const refsFav = {
    addToFav: document.querySelectorAll('.catalogue__item'),
  };

  let favoriteCocktailsEl = [];

  const allCocktailsEl = refsFav.addToFav;

  let BtnToFavoriteCocktails = '';

  function allCocktailsMap() {
    for (let i = 0; i < allCocktailsEl.length - 1; i++) {
      BtnToFavoriteCocktails =
        allCocktailsEl[i].children[1].children[1].children[1];

      BtnToFavoriteCocktails.addEventListener(
        'click',
        onClickBtnToAddFavoriteCocktails
      );

      let parsedCocktailsData = ';';

      function onClickBtnToAddFavoriteCocktails() {
        // console.log(allCocktailsEl[i]);

        let htmlCoctailCard = new XMLSerializer().serializeToString(
          allCocktailsEl[i]
        );
        favoriteCocktailsEl.push(htmlCoctailCard);

        localStorage.setItem(
          'FAVORITE_COCKTAILS',
          JSON.stringify(favoriteCocktailsEl)
        );
        let savedCocktailsData = localStorage.getItem('FAVORITE_COCKTAILS');
        parsedCocktailsData = JSON.parse(savedCocktailsData).join('');
        console.log(parsedCocktailsData);

        catalogueListFavoriteCocktails.insertAdjacentHTML(
          'beforeend',
          parsedCocktailsData
        );
      }
    }
  }
  allCocktailsMap();
}, 4000);

// function addFavoriteCocktailToLocalStorage(e) {
//   const currentEl = e;
//   const maket = `<li class="catalogue__item">
//     <img src="https://www.thecocktaildb.com/images/media/drink/mql55h1643820632.jpg" alt="" min-width="280" loading="lazy">
//     <div class="catalogue__description">
//       <p class="catalogue__text">A.D.M. (After Dinner Mint)</p>
//       <div class="catalogue__btn">
//         <button class="btn__orange" type="button">Learn more</button>
//         <button class="btn__transparent" type="button">
//           Add to

//           <svg class="svg__btn" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M9.64552 16.8891L9.64408 16.8878C6.91999 14.4519 4.74082 12.5008 3.23063 10.68C1.73147 8.87263 1 7.31869 1 5.69482C1 3.07114 3.08006 1 5.775 1C7.3044 1 8.784 1.70692 9.74314 2.81762L10.5 3.69406L11.2569 2.81762C12.216 1.70692 13.6956 1 15.225 1C17.9199 1 20 3.07114 20 5.69482C20 7.31871 19.2685 8.87269 17.7692 10.6816C16.2589 12.5036 14.0801 14.457 11.3563 16.8978C11.3559 16.8982 11.3555 16.8985 11.3551 16.8989L10.5025 17.6584L9.64552 16.8891Z" stroke="#FD5103" stroke-width="2"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   </li>`;
//   console.log(currentEl);
//   console.log(maket);
//   localStorage.setItem('FAVORITE_COCKTAILS', JSON.stringify(maket));
// }
