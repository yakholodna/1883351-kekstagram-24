//All imports
import {numOfPics} from './utils/constants';
import {numOfComments} from './utils/constants';
import {generateComment} from './utils/create-functions';
import {createPicture} from './utils/create-functions';

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
    // Adds newly created picture w/ unique id and comments to array of pictures
    pictures.push(createPicture(pic, comments));
  }
  return pictures;
};
generatePictures();


