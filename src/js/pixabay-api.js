import renderMarkup from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
let totalImg = 0;

export default async function fetchImages(searchWord, page) {
  axios.defaults.baseURL = 'https://pixabay.com/api';
  try {
    const response = await axios.get('/', {
      params: {
        key: '42078504-06c0bc861c70afe486d8727f6',
        q: searchWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 42,
      },
    });
    renderMarkup(response.data);
    totalImg = response.data.totalHits;
    return response.data;
  } catch (error) {
    iziToast.error({ message: error.message });
  }
}
// hell
// const BASE_URL = 'https://pixabay.com/api/';
// const PARAMS = new URLSearchParams({
//   key: '42078504-06c0bc861c70afe486d8727f6',
//   q: searchWord,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// });
// const URL = `${BASE_URL}?${PARAMS}`;
// fetch(URL)
//   .then(response => response.json())
// .then(data => renderMarkup(data))
// .catch(error =>
//   iziToast.error({
//     message: error.name,
//   })
// );
// }

export { totalImg };
