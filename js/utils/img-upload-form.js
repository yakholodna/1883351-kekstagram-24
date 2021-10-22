import {addBodyModalOpen, escCode, makesHidden, removeBodyModalOpen} from './constants';

//Finds the upload and the form
const uploadForm = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('.img-upload__form');

//Hashtags and comments containers
const hashtagText = document.querySelector('.text__hashtags');

//Closing upload form with esc key
const onKeyDown = (evt) => {
  evt.preventDefault();
  if (evt.key === escCode) {
    closeForm();
  }
};

//Functions that open and close the form
const openForm = () => {
  uploadForm.classList.remove('hidden');
  addBodyModalOpen();
  document.addEventListener('keydown', onKeyDown);
};
const closeForm = () => {
  makesHidden(uploadForm);
  removeBodyModalOpen();
  document.removeEventListener('keydown', onKeyDown);
};

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

  if (hashArr.length > 5) {
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


