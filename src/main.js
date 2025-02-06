import fetchImages from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { totalImg, per_page } from './js/pixabay-api';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.img-list'),
  loader: document.querySelector('.loader-container'),
  loadMore: document.querySelector('.load-more-btn'),
  scrollUp: document.querySelector('.scroll-up-btn'),
};

let page = 1;
let totalPages = 1;
let wordToSearch = '';
let elem = 0;

refs.loader.classList.add('hidden');
refs.loadMore.classList.add('hidden');

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  refs.loadMore.classList.add('hidden');
  refs.loader.classList.remove('hidden');
  wordToSearch = event.target.elements.search.value.trim();

  if (!wordToSearch) {
    iziToast.error({
      message: 'Sorry, searchfield can not be empty. Please, try again!',
    });
    refs.loadMore.classList.add('hidden');
    refs.list.innerHTML = '';
    refs.loader.classList.add('hidden');
    return;
  } else {
    fetchImages(wordToSearch, page).finally(() => {
      totalPages = Math.ceil(totalImg / per_page);
      refs.loader.classList.add('hidden');
      totalPages > 1
        ? refs.loadMore.classList.remove('hidden')
        : refs.loadMore.classList.add('hidden');
    });
  }
  refs.form.reset();
  refs.list.innerHTML = '';
}

refs.loadMore.addEventListener('click', handleLoadMore);

function handleLoadMore() {
  refs.loader.classList.remove('hidden');
  refs.loadMore.classList.add('hidden');

  page++;

  fetchImages(wordToSearch, page).finally(() => {
    refs.loader.classList.add('hidden');
    refs.loadMore.classList.remove('hidden');
    elem = document.querySelector('.img-item').getBoundingClientRect();
    let height = Math.floor(elem.height) * 2;
    window.scrollBy({
      top: height,
      left: 0,
      behavior: 'smooth',
    });
    if (page === totalPages || totalImg < per_page) {
      refs.loadMore.classList.add('hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  });
}

refs.scrollUp.addEventListener('click', handleScrollClick);

function handleScrollClick() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

document.addEventListener('scroll', onScroll);

function onScroll() {
  window.scrollY < window.innerHeight
    ? refs.scrollUp.classList.add('hidden')
    : refs.scrollUp.classList.remove('hidden');
}
