const getRandomInt = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
getRandomInt(2, 10);
const checkLengthRequirement = (string, maxLength) => string.length <= maxLength;
checkLengthRequirement('hello, world!', 5);

// Different comment descriptions
const COMMENT_SUGGESTIONS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Different comment authors
const COMMENT_AUTHORS = [
  'Лиза',
  'Света',
  'Скот',
  'Чарли',
  'Ангелина',
  'Мая'
];

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
const createPicture = (idNum, allComments) => {
  return {
    id: idNum,
    url: 'photos/' + idNum + '.jpg',
    description: 'description of picture goes here',
    likes: getRandomInt(15, 200),
    comments: allComments,
  };
}

// Creates an array of pictures
const generatePictures = () => {
  // Array of 25 pictures
  const pictures = [];
  // For loop for creating the array of pictures
  for (let pic = 1; pic < 26; pic++) {
    // Array of comments for each picture
    const comments = [];
    // For loop that creates 5 comments
    for (let com = 0; com < 5; com++) {
      comments.push(generateComment());
    }
    // Adds newly created picture w/ unique id and comments to array of pictures
    pictures.push(createPicture(pic, comments));
  }
  return pictures;
}
generatePictures();


