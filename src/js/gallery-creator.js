import cocktailCard from '../template/cocktail-card.hbs';
import noFindAnyCoctail from '../template/not-found-cocktails.hbs';
import { getApiData } from './rendering-catalogue';
import { checkingScreenWidth } from './cheking-screen-width';
import modalCoctails from '../template/modal-cocktails.hbs';

refsGallery = {
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

  // // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Sergey↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  // const openModalBtn = document.querySelector('[data-modal-open]');
  // openModalBtn.addEventListener('click', CreateModal);
  // // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑Sergey↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}

function ifNoFindAnyCocktail(r) {
  if (r !== null) {
    refsGallery.catalogueTitle.textContent = 'Cocktails';
    getRenderingApi(r);
  } else {
    resetContent();
    refsGallery.catalogueList.insertAdjacentHTML(
      'beforeend',
      noFindAnyCoctail()
    );
  }
}

function resetContent() {
  refsGallery.catalogueList.innerHTML = '';
  refsGallery.catalogueTitle.textContent = '';
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Sergey↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// const refsModal = {
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
// };

// function CreateModal() {
//   toggleModals();
//   getRenderingModalByName();
// }

// async function getRenderingModalByName() {
//   const array = await getClassApiData.getParsedModalApiData();
//   console.log(array);

//   getRenderingModalApi(array);
// }

// function getRenderingModalApi(array) {
//   const info = array.map(result => {
//     return modalCoctails(result);
//   });

//   console.log(info);
//   refsModal.modal.insertAdjacentHTML('beforeend', info);
//   refsModal.closeModalBtn.addEventListener('click', toggleModals);
// }

// // refsModal.closeModalBtn.addEventListener('click', toggleModals);

// function toggleModals() {
//   document.body.classList.toggle('overflow');
//   refsModal.modal.classList.toggle('is-hidden');
// }
// // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑Sergey↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
