import {generatePictures} from './create-photo-array.js';
import {createMiniature} from './miniatures.js';
import './img-upload-form.js';
import {showFullScreen} from './fullscreen.js';
import {numOfPics} from './utils/constants.js';

const photos = generatePictures();
createMiniature(photos);
const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', (evt) => {
  const currentPicture = evt.target.id;
  if (currentPicture > 0 && currentPicture < numOfPics) {
    showFullScreen(photos[currentPicture - 1]);
  }
});

