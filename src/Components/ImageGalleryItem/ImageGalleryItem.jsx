import st from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ img, largeImg }) => {
  return (
    <li className={st.ImageGalleryItem}>
      <img
        src={img}
        alt=""
        data-img={largeImg}
        className={st.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
