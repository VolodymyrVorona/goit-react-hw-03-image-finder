const API_KEY = '20666088-0fcbaa9dff33f5180232b13ab';

const getGallery = value => {
  return fetch(
    `https://pixabay.com/api/?q=${value}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(response => response.json())
    .then(console.log);
};

export default getGallery;
