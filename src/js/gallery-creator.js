import cocktailCard from '../template/cocktail-card.hbs';
import noFindAnyCoctail from '../template/not-found-cocktails.hbs';
import { getApiData } from './rendering-catalogue';
import { checkingScreenWidth } from './cheking-screen-width';
import modalCoctails from '../template/modal-cocktails.hbs';

// const InfiniteScroll = require('infinite-scroll');

const refsGallery = {
  formHeader: document.querySelector('.header__search-form'),
  catalogueTitle: document.querySelector('.catalogue__title'),
  catalogueList: document.querySelector('.catalogue__list'),
};

const getClassApiData = new getApiData();

refsGallery.formHeader.addEventListener('submit', getSearchCocktailByName);

function getSearchCocktailByName(e) {
  e.preventDefault();
  getClassApiData.value = e.currentTarget.elements.headerInput.value.trim();
  refsGallery.formHeader.reset();
  if (getClassApiData.value) {
    getClassApiData.key = 's';
    getRenderingCocktailByName();
    refsGallery.catalogueList.innerHTML = '';
  }
}

async function getRenderingCocktailByName() {
  const r = await getClassApiData.getParsedApiData();

  ifNoFindAnyCocktail(r);
}

async function getRenderingRandomCoctail() {
  refsGallery.catalogueTitle.textContent = 'Cocktails';
  for (let i = 0; i < checkingScreenWidth; i += 1) {
    const r = await getClassApiData.getParsedApiDataRandom();
    getRenderingApi(r);
  }
}

getRenderingRandomCoctail();

function getRenderingApi(r) {
  const data = r
    .map(result => {
      return cocktailCard(result);
    })
    .join('');

  refsGallery.catalogueList.insertAdjacentHTML('beforeend', data);

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Sergey↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  const openModalBtn = document.querySelector('[data-modal-open]');
  openModalBtn.addEventListener('click', CreateModal);
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑Sergey↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}

function ifNoFindAnyCocktail(r) {
  if (r !== null) {
    let arr = [];
    for (let i = 0; i < checkingScreenWidth; i += 1) {
      if (r[i]) {
        arr.push(refactoringCocktailsArray(r)[i]);
      }
    }
    refsGallery.catalogueTitle.textContent = 'Cocktails';
    getRenderingApi(arr);
  } else {
    resetContent();
    refsGallery.catalogueList.insertAdjacentHTML(
      'beforeend',
      noFindAnyCoctail()
    );
  }
}

function refactoringCocktailsArray(elements) {
  return elements.map(el => {
    let arr = [];

    for (let key of Object.keys(el)) {
      for (let i = 1; i < 15; i += 1) {
        if (key === `strIngredient${i}` && el[key] !== null) {
          arr.push(el[key]);
          el.strIngredient = arr;
        }
      }
    }
  });
}

function resetContent() {
  refsGallery.catalogueList.innerHTML = '';
  refsGallery.catalogueTitle.textContent = '';
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Sergey↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const refsModal = {
  modal: document.querySelector('[data-modal]'),
};

let markup = modalCoctails();

function CreateModal(e) {
  if (e.target.classList.contains('open-modal-button')) {
    toggleModals();
    refsModal.modal.insertAdjacentHTML('beforeend', markup);
    const closeModalBtn = document.querySelector('[data-modal-close]');
    closeModalBtn.addEventListener('click', toggleModals);
    markup = '';
  }
}

function toggleModals() {
  document.body.classList.toggle('overflow');
  refsModal.modal.classList.toggle('is-hidden');
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑Sergey↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
