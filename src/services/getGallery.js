const API_KEY = '20666088-0fcbaa9dff33f5180232b13ab';

const getGallery = (value, page = 1) => {
  return fetch(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => {
    if (!res.ok) {
      return Promise.reject(new Error('lskdjf  sldkjf 😃 lsdjkf'));
    }

    return res.json();
  });
};

export default getGallery;
