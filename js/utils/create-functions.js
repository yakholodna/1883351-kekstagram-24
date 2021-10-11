import {getRandomInt} from './utils';
import {COMMENT_AUTHORS, COMMENT_SUGGESTIONS} from './constants';

// Creates one comment object
const generateComment = () => {
  const randomCommentInt = getRandomInt(0, COMMENT_SUGGESTIONS.length - 1);
  const randomCommentAuthorInt = getRandomInt(0, COMMENT_AUTHORS.length - 1);
  return {
    id: getRandomInt(0, 1000),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: COMMENT_SUGGESTIONS[randomCommentInt],
    name: COMMENT_AUTHORS[randomCommentAuthorInt],
  };
};

// Creates one picture object
const createPicture = (idNum, allComments) => ({
  id: idNum,
  url: `photos/${idNum}.jpg`,
  description: 'description of picture goes here',
  likes: getRandomInt(15, 200),
  comments: allComments,
});

//Exports
export{generateComment};
export{createPicture};
