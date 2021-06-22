import st from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ img, alt, onImgClick }) => {
  return (
    <li className={st.ImageGalleryItem} onClick={onImgClick}>
      <img src={img} alt={alt} className={st.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
