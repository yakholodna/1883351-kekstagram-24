const createMiniature = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments;
    pictureFragment.appendChild(photoElement);

  });

  const pictureContainer = document.querySelector('.pictures');
  pictureContainer.appendChild(pictureFragment);
}

//Exports
export {createMiniature};


