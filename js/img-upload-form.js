import {addBodyModalOpen, escCode, makesHidden, removeBodyModalOpen, maxNumOfHashtags} from './utils/constants.js';

//Finds the upload and the form
const uploadForm = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('.img-upload__form');

//Hashtags container
const hashtagText = uploadForm.querySelector('.text__hashtags');

//Preview image scale
const imgUploadPreview = document.querySelector('.img-upload__preview');
let scaleNumber = 100;
const scaleValue = document.querySelector('.scale__control--value');
scaleValue.value = `${scaleNumber}%`;
const scaleIncrease = document.querySelector('.scale__control--bigger');
scaleIncrease.addEventListener('click', () => {
  if (scaleNumber <= 75) {
    scaleNumber += 25;
    scaleValue.value = `${scaleNumber}%`;
    imgUploadPreview.style.transform = `scale(${scaleNumber/100})`;
  }
});
const scaleDecrease = document.querySelector('.scale__control--smaller');
scaleDecrease.addEventListener('click', () => {
  if (scaleNumber >= 50) {
    scaleNumber -= 25;
    scaleValue.value = `${scaleNumber}%`;
    imgUploadPreview.style.transform = `scale(${scaleNumber/100})`;
  }
});

//Effects slider
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
noUiSlider.create(effectLevelSlider, {
  start : 1.00,
  range : {
    min : 0,
    max : 1.00,
  },
  step : 0.1,
  connect : 'lower',
});
makesHidden(effectLevelSlider);

//Effects
const effectsList = document.querySelector('.effects__list');
let selectedFilter = '';
const onFilterChange = (evt) => {
  selectedFilter = evt.target.value;
  if (selectedFilter !== 'none') {
    //Adds filter to preview
    imgUploadPreview.className = '';
    imgUploadPreview.classList.add('img-upload__preview');
    imgUploadPreview.classList.add(`effects__preview--${selectedFilter}`);
    //Works slider
    effectLevelSlider.classList.remove('hidden');
    if (selectedFilter === 'chrome') {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start : 1,
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `grayscale(${effectLevelSlider.noUiSlider.get()})`;
      });
    }
    else if (selectedFilter === 'sepia') {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start : 1,
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `sepia(${effectLevelSlider.noUiSlider.get()})`;
      });
    }
    else if (selectedFilter === 'marvin') {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start : 100,
        step: 1,
      });
      effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `invert(${effectLevelSlider.noUiSlider.get()}%)`;
      });
    }
    else if (selectedFilter === 'phobos') {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start : 3,
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `blur(${effectLevelSlider.noUiSlider.get()}px)`;
      });
    }
    else if (selectedFilter === 'heat') {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start : 3,
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `brightness(${effectLevelSlider.noUiSlider.get()})`;
      });
    }
  }
  else {
    imgUploadPreview.className = '';
    imgUploadPreview.classList.add('img-upload__preview');
    makesHidden(effectLevelSlider);
    imgUploadPreview.style.filter = '';
  }
};
effectsList.addEventListener('change', (evt) => {
  onFilterChange(evt);
});

//Closing upload form with esc key
const onKeyDown = (evt) => {
  evt.preventDefault();
  if (evt.key === escCode) {
    closeForm();
  }
};

//Functions that open and close the form
function openForm() {
  uploadForm.classList.remove('hidden');
  addBodyModalOpen();
  document.addEventListener('keydown', onKeyDown);
}
function closeForm() {
  makesHidden(uploadForm);
  removeBodyModalOpen();
  document.removeEventListener('keydown', onKeyDown);
}

//Buttons that open and close the upload window
const openButton = document.querySelector('#upload-file');
openButton.addEventListener('change', () => {
  openForm();
});
const closeButton = document.querySelector('#upload-cancel');
closeButton.addEventListener('click', () => {
  closeForm();
  formElement.reset();
});

//Checking hashtag validity
hashtagText.addEventListener('input', () => {
  const value = hashtagText.value;
  const hashArr = value.split();
  const valid = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  if (hashArr.length > maxNumOfHashtags) {
    hashtagText.setCustomValidity('Не может быть больше пяти хештегов!');
  }
  else {
    hashtagText.setCustomValidity('');
  }
  for (let i = 0; i < hashArr.length; i++) {
    if (!valid.test(hashArr[i]) && hashArr[i] !== '') {
      hashtagText.setCustomValidity('Не валидный хештег. Убедитесь что нету спецсимволов, пробелов, символов пунктуации, и эмодзи.');
    }
    for (let j = 0; j < hashArr.length; j++ ) {
      if (hashArr[i].toLowerCase() === hashArr[j].toLowerCase()) {
        hashtagText.setCustomValidity('Хештеги нельзя повторять');
      }
    }
  }
  hashtagText.reportValidity();
});



