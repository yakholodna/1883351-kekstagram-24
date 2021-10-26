//All imports
import {numOfPics} from './constants.js';
import {generateComment, createPicture} from './create-functions.js';
import {getRandomInt} from './utils.js';

// Array of 25 pictures
const pictures = [];

// Creates an array of pictures
const generatePictures = () => {
  // For loop for creating the array of pictures
  for (let pic = 1; pic < numOfPics; pic++) {
    const numOfComments = getRandomInt(1,5);
    // Array of comments for each picture
    const comments = [];
    // For loop that creates 5 comments
    for (let com = 0; com < numOfComments; com++) {
      comments.push(generateComment());
    }
    //Creates a picture
    const newPicture = createPicture(pic, comments);
    // Adds newly created picture w/ unique id and comments to array of pictures
    pictures.push(newPicture);
  }
  return pictures;
};

export {generatePictures};


