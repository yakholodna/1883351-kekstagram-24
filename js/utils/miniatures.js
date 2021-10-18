//Template for a picture from HTML
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
//Attributes that need to be assigned (found in template)
const image = pictureTemplate.querySelector('img');
const imageInfo = pictureTemplate.querySelector('p');
//Fragment that will be inserted into the picture container
const pictureFragment = document.createDocumentFragment();

//All elements
const imageElement = image.cloneNode(true);
const infoElement = imageInfo.cloneNode(true);

//Exports
export {pictureContainer};
export {pictureFragment};
export {imageElement};
export {infoElement};


