import {
  escCode,
  fullScreenImgSize,
  addBodyModalOpen,
  makesHidden,
  commentFragmentSize,
  maxNumOfHashtags,
  removeBodyModalOpen
} from './utils/constants.js';

const showFullScreen = (photo) => {
  //Activates full-screen mode
  const bigPicture = document.querySelector('.big-picture.overlay');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const numOfComments = photo.comments.length;

  //Setup
  bigPicture.classList.remove('hidden');
  addBodyModalOpen();
  socialCommentCount.classList.remove('hidden');
  if (photo.comments.length > maxNumOfHashtags) {
    commentsLoader.classList.remove('hidden');
  }

  //Closing window using the exit button
  const closeModalElement = document.querySelector('#picture-cancel');
  closeModalElement.addEventListener('click', () => {
    makesHidden(bigPicture);
    removeBodyModalOpen();
  });

  //Closing window using esc
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (evt.key === escCode) {
      makesHidden(bigPicture);
      removeBodyModalOpen();
    }
  });

  //Setting up the picture settings (src, likes, comments, description)
  const bigImgSource = bigPicture.getElementsByClassName('big-picture__img')[0].querySelector('img');
  bigImgSource.src = photo.url;
  const bigImgLikes = bigPicture.querySelector('.likes-count');
  bigImgLikes.textContent = photo.likes;
  const bigImgDescription = bigPicture.querySelector('.social__caption');
  bigImgDescription.textContent = photo.description;
  const socialCommentsList = bigPicture.querySelector('.social__comments');

  //Removes all comments previously there
  let child = socialCommentsList.lastElementChild;
  while (child) {
    socialCommentsList.removeChild(child);
    child = socialCommentsList.lastElementChild;
  }
  let totalCommentsDistributed = 0;

  //Function that adds a single comment
  const addComment = (index) => {
    const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');
    const socialCommentImg = document.createElement('img');
    socialCommentImg.classList.add('social__picture');
    socialCommentImg.src = photo.comments[index].avatar;
    socialCommentImg.alt = photo.comments[index].name;
    socialCommentImg.width = fullScreenImgSize;
    socialCommentImg.height = fullScreenImgSize;
    socialComment.appendChild(socialCommentImg);
    const socialCommentText = document.createElement('p');
    socialCommentText.classList.add('social__text');
    socialCommentText.textContent = photo.comments[index].message;
    socialComment.appendChild(socialCommentText);
    socialCommentsList.appendChild(socialComment);
  };

  //Sets up initial comments for the picture
  if (numOfComments <= commentFragmentSize) {
    makesHidden(commentsLoader);
    for (let com = 0; com < numOfComments; com++) {
      addComment(com);
    }
    socialCommentCount.textContent = `${numOfComments} из ${numOfComments} комментариев`;
  }
  else {
    for (let com = 0; com < commentFragmentSize; com++) {
      addComment(com);
    }
    totalCommentsDistributed += commentFragmentSize;
    socialCommentCount.textContent = `${commentFragmentSize} из ${numOfComments} комментариев`;
  }


  //Sets up other comments when "load more comments" is clicked
  const showMoreComments = () => {
    if (totalCommentsDistributed < numOfComments) {
      console.log((numOfComments - totalCommentsDistributed) >= commentFragmentSize);
      if ((numOfComments - totalCommentsDistributed) >= commentFragmentSize) {
        for (let com = totalCommentsDistributed; com < commentFragmentSize + totalCommentsDistributed; com++) {
          addComment(com);
        }
        totalCommentsDistributed += commentFragmentSize;
        socialCommentCount.textContent = `${totalCommentsDistributed} из ${numOfComments} комментариев`;
      }
      else {
        let diff = 0;
        for (let com = totalCommentsDistributed; com < numOfComments; com++) {
          addComment(com);
          diff++;
        }
        totalCommentsDistributed += diff;
        socialCommentCount.textContent = `${totalCommentsDistributed} из ${numOfComments} комментариев`;
      }
    }
    if (totalCommentsDistributed === numOfComments) {
      makesHidden(commentsLoader);
    }
  };
  commentsLoader.addEventListener('click', () => {
    showMoreComments();
  });
};

//Exports
export {showFullScreen};

