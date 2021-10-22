import {generatePictures} from './utils/create-photo-array.js';
import {createMiniature} from './utils/miniatures.js';
import './utils/img-upload-form';
import {showFullScreen} from './utils/fullscreen.js';

createMiniature(generatePictures());
showFullScreen(generatePictures()[0]);

