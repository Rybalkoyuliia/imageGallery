import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.img-list');
const loadMore = document.querySelector('.load-more-btn');

export default function renderMarkup(arr) {
  if (arr.hits.length > 0) {
    const markup = arr.hits
      .map(
        img => `<li class="img-item">
        <div class="gallery">
        <a href=${img.largeImageURL}><img class="img" src=${img.webformatURL} alt=${img.tags}/></a></div>
        <ul class="img-descr-list">
        <li class="img-descr-item"><h4 class="descr-name">Likes</h4><p class="descr-value">${img.likes}</p></li>
        <li class="img-descr-item"><h4 class="descr-name">Views</h4><p class="descr-value">${img.views}</p></li>
        <li class="img-descr-item"><h4 class="descr-name">Comments</h4><p class="descr-value">${img.comments}</p></li>
        <li class="img-descr-item"><h4 class="descr-name">Downloads</h4><p class="descr-value">${img.downloads}</p></li>
        </ul>
      </li>`
      )
      .join('');
    list.insertAdjacentHTML('beforeend', markup);

    new SimpleLightbox('.gallery a', {
      captionDelay: 250,
    });
  } else {
    loadMore.classList.add('hiddent');
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    list.innerHTML = '';
  }
}
