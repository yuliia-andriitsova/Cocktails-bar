import { getApiData } from './rendering-catalogue';
import cocktailCard from '../template/cocktail-card.hbs';

const refs = {
  selectBtn: document.querySelector('.select__btn'),
  selectItem: document.querySelectorAll('.select__item'),
  selectBody: document.querySelector('.select__body'),
  selectBtnText: document.querySelector('.select__current'),
};

refs.selectBody.addEventListener('click', onItemClick);
refs.selectBtn.addEventListener('click', () => {
  refs.selectBody.classList.toggle('is-hidden');
});

function onItemClick(e) {
  // console.log(e.target.dataset.value);

  let text = e.target.dataset.value;
  refs.selectBtnText.textContent = text;
  refs.selectBody.classList.add('is-hidden');
}

const refsGallery = {
  catalogueList: document.querySelector('.catalogue__list'),
};

const getData = new getApiData();

refs.selectBody.addEventListener('click', getSearchCocktailFirstLetter);

async function getSearchCocktailFirstLetter(e) {
  // console.log(e.target.dataset.value);
  getData.value = e.target.dataset.value;

  if (getData.value) {
    getData.key = 'f';
    const drinks = await getData.getParsedApiData();
    refsGallery.catalogueList.innerHTML = '';
    getRenderingApi(drinks);
  }
}

function getRenderingApi(r) {
  const data = r
    .map(result => {
      return cocktailCard(result);
    })
    .join('');
  refsGallery.catalogueList.insertAdjacentHTML('beforeend', data);
}
