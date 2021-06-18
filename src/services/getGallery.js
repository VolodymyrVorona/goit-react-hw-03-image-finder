const API_KEY = '20666088-0fcbaa9dff33f5180232b13ab';

const getGallery = value => {
  return fetch(
    `https://pixabbay.com/api/?qqq=${value}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => {
    console.log(res);
    if (res.ok) return res.json();

    return Promise.reject(new Error('lskdjf sldkjf lsdjkf'));
  });
};

export default getGallery;
