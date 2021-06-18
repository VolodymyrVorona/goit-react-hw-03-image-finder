import { Component } from 'react';
import { toast } from 'react-toastify';

import ImageGalleryItem from '../ImageGalleryItem';

import getGallery from '../../services/getGallery';

import st from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = { pictures: [] };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.ImagesName !== this.props.ImagesName) {
      getGallery(this.props.ImagesName)
        .then(console.log)
        .catch(error => toast.error(error.message, { autoClose: 3000 }));
    }
  }

  render() {
    const { pictures } = this.state;

    return (
      <ul className={st.ImageGallery}>
        {pictures.length !== 0 &&
          pictures.map(obg => <ImageGalleryItem img={obg.previewURL} />)}
      </ul>
    );
  }
}

export default ImageGallery;

// .then(img => {
//         this.setState(({ pictures }) => ({
//           pictures: [...pictures, ...img.hits],
//         }));
//       });
