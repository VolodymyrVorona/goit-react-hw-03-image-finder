import ImageGalleryItem from '../ImageGalleryItem';

import st from './ImageGallery.module.css';

const ImageGallery = ({ gallery, onImgClick }) => {
  return (
    <>
      <ul className={st.ImageGallery}>
        {gallery.map(({ id, previewURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            img={previewURL}
            largeImg={largeImageURL}
            alt={tags}
            onImgClick={onImgClick}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
