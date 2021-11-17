// Constants
const escCode = 'Escape';
const fullScreenImgSize = 35;
const maxNumOfHashtags = 5;
const commentFragmentSize = 5;

const addBodyModalOpen = () => document.querySelector('body').classList.add('modal-open');
const removeBodyModalOpen = () => document.querySelector('body').classList.remove('modal-open');

//Function that exits adds a hidden class
const makesHidden = (element) => element.classList.add('hidden');

export {escCode};
export {fullScreenImgSize};
export {maxNumOfHashtags};
export {commentFragmentSize};
export {addBodyModalOpen};
export {removeBodyModalOpen};
export {makesHidden};

