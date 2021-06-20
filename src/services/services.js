const API_KEY = '20666088-0fcbaa9dff33f5180232b13ab';
const BASE_URL = 'https://pixabay.com';

export const getGallery = (value, page = 1, items = 12) => {
  return fetch(
    `${BASE_URL}/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${items}`,
  ).then(res => {
    if (res.ok) return res.json();

    return Promise.reject(
      new Error(
        'Unfortunately, we ran out of images at your request. Please make another request ',
      ),
    );
  });
};

export const scroll = () => {
  return window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};
