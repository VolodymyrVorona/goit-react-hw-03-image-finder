import st from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ img, largeImg, alt, onImgClick }) => {
  return (
    <li className={st.ImageGalleryItem} onClick={onImgClick}>
      <img
        src={img}
        alt={alt}
        data-img={largeImg}
        className={st.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
