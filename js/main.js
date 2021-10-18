//All imports
import {numOfPics} from './utils/constants';
import {numOfComments} from './utils/constants';
import {generateComment} from './utils/create-functions';
import {createPicture} from './utils/create-functions';
import {imageElement} from './utils/miniatures';
import {infoElement} from './utils/miniatures';
import {pictureFragment} from './utils/miniatures';
import {pictureContainer} from './utils/miniatures';

// Creates an array of pictures
const generatePictures = () => {
  // Array of 25 pictures
  const pictures = [];
  // For loop for creating the array of pictures
  for (let pic = 1; pic < numOfPics; pic++) {
    // Array of comments for each picture
    const comments = [];
    // For loop that creates 5 comments
    for (let com = 0; com < numOfComments; com++) {
      comments.push(generateComment());
    }
    //Creates a picture
    const newPicture = createPicture(pic, comments);
    //Addition of DOM elements
    imageElement.src.textContent = newPicture.url;
    pictureFragment.appendChild(imageElement);
    infoElement.children[0].textContent = String(numOfComments);
    infoElement.children[1].textContent = String(newPicture.likes);
    pictureFragment.appendChild(infoElement);
    pictureContainer.appendChild(pictureFragment);
    // Adds newly created picture w/ unique id and comments to array of pictures
    pictures.push(newPicture);
  }
  return pictures;
};
generatePictures();


