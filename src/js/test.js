const refsTest = {
  testBtn: document.querySelector(
    'body > main > div.main-page > section.catalogue > div > div > ul > li:nth-child(1) > div > div > button.btn__orange'
  ),
};

function onBtnTest() {
  console.log(refsTest.testBtn);
}

refsTest.testBtn.addEventListener('click', onBtnTest);
