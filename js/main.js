import {pictures} from './utils/create-photo-array';
import {createMiniature} from './utils/miniatures';
import {showFullScreen} from './utils/fullscreen';

createMiniature(pictures);
showFullScreen(pictures[0]);
