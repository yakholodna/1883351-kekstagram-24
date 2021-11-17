import {createMiniature, createRandomMiniatures, createPopularMiniatures} from './miniatures.js';
import './img-upload-form.js';
import './user-picture.js';
import {showFullScreen} from './fullscreen.js';
import {setDefaultClick, setRandomClick, setDiscussedClick} from './filters.js';
import {debounce} from './utils/debounce.js';

const images = [];
const body = document.querySelector('body');
const imgUploadError = document.querySelector('#error').content;
const picturesContainer = document.querySelector('.pictures');
const rerenderDelay = 500;
fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((pictures) => {
    createMiniature(pictures);
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    setDefaultClick(debounce(() => createMiniature(pictures), rerenderDelay));
    setRandomClick(debounce(() => createRandomMiniatures(pictures), rerenderDelay));
    setDiscussedClick(debounce(() => createPopularMiniatures(pictures), rerenderDelay));
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
  if (evt.target.id !== 'upload-file') {
    const currentPicture = images[0][evt.target.id];
    showFullScreen(currentPicture);
  }
});

