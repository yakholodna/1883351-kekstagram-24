import {escCode, fullScreenImgSize, addBodyModalOpen, makesHidden, commentFragmentSize, maxNumOfHashtags} from './constants.js';

const showFullScreen = (photo) => {
  //Activates full-screen mode
  const bigPicture = document.querySelector('.big-picture');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const arrayOfCommentArrays = [];

  //Setup
  bigPicture.classList.remove('hidden');
  addBodyModalOpen();
  socialCommentCount.classList.remove('hidden');
  if (photo.comments.length > maxNumOfHashtags) {
    commentsLoader.classList.remove('hidden');
  }

  //Setting up the picture settings (src, likes, comments, description)
  const bigImgSource = bigPicture.querySelector('.big-picture__img img');
  bigImgSource.src = photo.url;
  const bigImgLikes = bigPicture.querySelector('.likes-count');
  bigImgLikes.textContent = photo.likes;
  const bigImgComm = bigPicture.querySelector('.comments-count');
  bigImgComm.textContent = photo.comments;
  const bigImgDescription = bigPicture.querySelector('.social__caption');
  bigImgDescription.textContent = photo.description;
  const socialCommentsList = bigPicture.querySelector('.social__comments');

  //Sets up first 5 comments for the picture
  for (let com = 0; com < commentFragmentSize; com++) {
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

  //Distributes all comments into fragments
  let commentsDistributed = 0;
  for (let fragment = 0; fragment < Math.ceil(photo.comments.length/commentFragmentSize); fragment++) {
    const commentFragment = [];
    if ((commentFragmentSize + commentsDistributed) > photo.comments.length) {
      for (let comment = commentsDistributed; comment < photo.comments.length; comment++) {
        commentFragment.push(photo.comments[comment]);
      }
      arrayOfCommentArrays.push(commentFragment);
    }
    else {
      for (let comment = commentsDistributed; comment < (commentFragmentSize + commentsDistributed); comment++) {
        commentFragment.push(photo.comments[comment]);
      }
      arrayOfCommentArrays.push(commentFragment);
    }
    commentsDistributed += commentFragmentSize;
  }

  let fragmentsUsed= 1;
  //Button that loads more comments
  commentsLoader.addEventListener('click', () => {
    const currentFragment = arrayOfCommentArrays[fragmentsUsed];
    //Sets up all comments for the picture
    for (let com = 0; com < currentFragment.length; com++) {
      const socialComment = document.createElement('li');
      socialComment.classList.add('social__comment');
      const socialCommentImg = document.createElement('img');
      socialCommentImg.classList.add('social__picture');
      socialCommentImg.src = currentFragment[com].avatar;
      socialCommentImg.alt = currentFragment[com].name;
      socialCommentImg.width = fullScreenImgSize;
      socialCommentImg.height = fullScreenImgSize;
      socialComment.appendChild(socialCommentImg);
      const socialCommentText = document.createElement('p');
      socialCommentText.classList.add('social__text');
      socialCommentText.textContent = currentFragment[com].message;
      socialComment.appendChild(socialCommentText);
      socialCommentsList.appendChild(socialComment);
    }
    fragmentsUsed++;
    socialCommentCount.textContent = `${fragmentsUsed * commentFragmentSize} из `;
  });

  //Closing window using the exit button
  const closeModalElement = document.querySelector('#picture-cancel');
  closeModalElement.addEventListener('click', () => {
    makesHidden(bigPicture);
  });

  //Closing window using esc
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (evt.key === escCode) {
      makesHidden(bigPicture);
    }
  });
};

//Exports
export {showFullScreen};

