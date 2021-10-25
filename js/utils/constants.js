// Different comment descriptions
const COMMENT_SUGGESTIONS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Different comment authors
const COMMENT_AUTHORS = [
  'Лиза',
  'Света',
  'Скот',
  'Чарли',
  'Ангелина',
  'Мая',
];

// Constants
const numOfPics = 26;
const escCode = 'Escape';
const fullScreenImgSize = 35;
const maxNumOfHashtags = 5;

const addBodyModalOpen = () => document.querySelector('body').classList.add('modal-open');
const removeBodyModalOpen = () => document.querySelector('body').classList.remove('modal-open');

//Function that exits adds a hidden class
const makesHidden = (element) => element.classList.add('hidden');

export {COMMENT_AUTHORS};
export {COMMENT_SUGGESTIONS};
export {numOfPics};
export {escCode};
export {fullScreenImgSize};
export {maxNumOfHashtags};
export {addBodyModalOpen};
export {removeBodyModalOpen};
export {makesHidden};
