const imgUpload = document.querySelector('.img-upload');
const comparePicturePopularity = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;
const putInOriginalOrder = (picture1, picture2) => picture1.id - picture2.id;
const shuffle = (array) => array.sort(() => Math.random() - .5);

const createMiniature = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureFragment = document.createDocumentFragment();
  const pictureContainer = document.querySelector('.pictures');

  photos
    .slice()
    .sort(putInOriginalOrder)
    .forEach((photo) => {
      const photoElement = pictureTemplate.cloneNode(true);
      photoElement.querySelector('.picture__img').src = photo.url;
      photoElement.querySelector('.picture__img').id = photo.id;
      photoElement.querySelector('.picture__likes').textContent = photo.likes;
      photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
      pictureFragment.appendChild(photoElement);
    });
  pictureContainer.innerHTML = '';
  pictureContainer.appendChild(imgUpload);
  return pictureContainer.appendChild(pictureFragment);
};

const createRandomMiniatures = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureFragment = document.createDocumentFragment();
  const pictureContainer = document.querySelector('.pictures');
  shuffle(photos);

  photos
    .slice(0, 10)
    .forEach((photo) => {
      const photoElement = pictureTemplate.cloneNode(true);
      photoElement.querySelector('.picture__img').src = photo.url;
      photoElement.querySelector('.picture__img').id = photo.id;
      photoElement.querySelector('.picture__likes').textContent = photo.likes;
      //photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
      pictureFragment.appendChild(photoElement);
    });
  pictureContainer.innerHTML = '';
  pictureContainer.appendChild(imgUpload);
  return pictureContainer.appendChild(pictureFragment);
};

const createPopularMiniatures = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureFragment = document.createDocumentFragment();
  const pictureContainer = document.querySelector('.pictures');

  photos
    .slice()
    .sort(comparePicturePopularity)
    .forEach((photo) => {
      const photoElement = pictureTemplate.cloneNode(true);
      photoElement.querySelector('.picture__img').src = photo.url;
      photoElement.querySelector('.picture__img').id = photo.id;
      photoElement.querySelector('.picture__likes').textContent = photo.likes;
      photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
      pictureFragment.appendChild(photoElement);
    });
  pictureContainer.innerHTML = '';
  pictureContainer.appendChild(imgUpload);
  return pictureContainer.appendChild(pictureFragment);
};

//Exports
export {createMiniature, createRandomMiniatures, createPopularMiniatures};


