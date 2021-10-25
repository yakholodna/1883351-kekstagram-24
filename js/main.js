import {generatePictures} from './utils/create-photo-array.js';
import {createMiniature} from './utils/miniatures.js';
import './utils/img-upload-form';

createMiniature(generatePictures());

