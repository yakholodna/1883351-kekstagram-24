const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');

const setDefaultClick = (cb) => {
  defaultFilter.addEventListener('click', () => {
    discussedFilter.classList.remove('img-filters__button--active');
    randomFilter.classList.remove('img-filters__button--active');
    defaultFilter.classList.add('img-filters__button--active');
    cb();
  })
}
//Shows 10 random photos (cannot repeat)
const setRandomClick = (cb) => {
  randomFilter.addEventListener('click', () => {
    defaultFilter.classList.remove('img-filters__button--active');
    discussedFilter.classList.remove('img-filters__button--active');
    randomFilter.classList.add('img-filters__button--active');
    cb();
  })
}
//Shows all 25 photos with the most amount of comments at the top (in decreasing order)
const setDiscussedClick = (cb) => {
  discussedFilter.addEventListener('click', () => {
    defaultFilter.classList.remove('img-filters__button--active');
    randomFilter.classList.remove('img-filters__button--active');
    discussedFilter.classList.add('img-filters__button--active');
    cb();
  })
}

export {setDefaultClick, setDiscussedClick, setRandomClick};
