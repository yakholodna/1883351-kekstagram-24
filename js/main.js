import {createMiniature} from './miniatures.js';
import './img-upload-form.js';
import {showFullScreen} from './fullscreen.js';

const images = [];
const body = document.querySelector('body');
const imgUploadError = document.querySelector('#error').content;
const picturesContainer = document.querySelector('.pictures');
fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((pictures) => {
    createMiniature(pictures);
    images.push(pictures);
  })
  .catch(() => {
    const errorMessage = imgUploadError.cloneNode(true);
    errorMessage.querySelector('.error__title').textContent = 'Ошибка загрузки файлов :(';
    errorMessage.removeChild(errorMessage.querySelector('.error__button'));
    body.appendChild(errorMessage);
  });
picturesContainer.addEventListener('click', (evt) => {
  //Здесь нужна помощь. Когда кликаю на upload, всё равно открывается последняя фотка которая была открыта, не смотря на то что есть код который это должен предусматривать
  if (evt.target.id !== "upload-file") {
    const currentPicture = images[0][evt.target.id];
    showFullScreen(currentPicture);
  }
});

