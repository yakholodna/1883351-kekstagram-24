import {pictures} from './utils/create-photo-array.js';
import {createMiniature} from './utils/miniatures.js';
import {showFullScreen} from './utils/fullscreen.js';

createMiniature(pictures);
showFullScreen(pictures[0]);
