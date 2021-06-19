import st from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
