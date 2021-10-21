import {escCode} from './constants.js';
import {fullScreenImgSize} from './constants.js';

//Activates full-screen mode
const bigPicture = document.querySelector('.big-picture');
//Function that exits fullscreen mode
const closeModal = () => {
  bigPicture.classList.add('hidden');
};

const showFullScreen = (photo) => {
  //Setting up the picture settings (src, likes, comments, description)
  bigPicture.classList.remove('hidden');
  const bigImgSource = bigPicture.querySelector('.big-picture__img img');
  bigImgSource.src = photo.url;
  const bigImgLikes = bigPicture.querySelector('.likes-count');
  bigImgLikes.textContent = photo.likes;
  const bigImgComm = bigPicture.querySelector('.comments-count');
  bigImgComm.textContent = photo.comments;
  const bigImgDescription = bigPicture.querySelector('.social__caption');
  bigImgDescription.textContent = photo.description;
  const socialCommentsList = bigPicture.querySelector('.social__comments');

  //Sets up all comments for the picture
  for (let com = 0; com < photo.comments.length; com++) {
    const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');
    const socialCommentImg = document.createElement('img');
    socialCommentImg.classList.add('social__picture');
    socialCommentImg.src = photo.comments[com].avatar;
    socialCommentImg.alt = photo.comments[com].name;
    socialCommentImg.width = fullScreenImgSize;
    socialCommentImg.height = fullScreenImgSize;
    socialComment.appendChild(socialCommentImg);
    const socialCommentText = document.createElement('p');
    socialCommentText.classList.add('social__text');
    socialCommentText.textContent = photo.comments[com].message;
    socialComment.appendChild(socialCommentText);
    socialCommentsList.appendChild(socialComment);
  }

  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');
  const commentsLoader = document.querySelector('.comments-loader');
  commentsLoader.classList.add('hidden');

  const body = document.querySelector('body');
  body.classList.add('modal-open');

  //Closing window using the exit button
  const closeModalElement = document.querySelector('#picture-cancel');
  closeModalElement.addEventListener('click', () => {
    closeModal();
  });

  //Closing window using esc
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (evt.key === escCode) {
      closeModal();
    }
  });
};

//Exports
export {showFullScreen};

