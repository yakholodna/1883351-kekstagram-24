const createMiniature = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureFragment = document.createDocumentFragment();
  const pictureContainer = document.querySelector('.pictures');

  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__img').id = photo.id;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureFragment.appendChild(photoElement);
  });
  return pictureContainer.appendChild(pictureFragment);
};

//Exports
export {createMiniature};


