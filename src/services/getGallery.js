const API_KEY = '20666088-0fcbaa9dff33f5180232b13ab';
const BASE_URL = 'https://pixabay.com';

const getGallery = (value, page = 1, items = 12) => {
  return fetch(
    `${BASE_URL}/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${items}`,
  ).then(res => {
    if (res.ok) return res.json();

    // return Promise.reject(new Error('lskdjf  sldkjf 😃 lsdjkf'));
  });
};

export default getGallery;
