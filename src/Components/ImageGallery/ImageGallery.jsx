import { Component } from 'react';
import { toast } from 'react-toastify';

import ImageGalleryItem from '../ImageGalleryItem';

import getGallery from '../../services/getGallery';

import st from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = { pictures: [], page: 1 };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.ImagesName !== this.props.ImagesName) {
      getGallery(this.props.ImagesName)
        .then(({ hits }) => {
          this.setState(({ pictures }) => ({
            pictures: [...pictures, ...hits],
          }));
        })
        .catch(error =>
          toast.error(`${error.message} 🙁`, { autoClose: 3000 }),
        );
    }
  }

  handleClick = e => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    console.log(this.state.page);
    const { pictures } = this.state;

    return (
      <>
        {pictures.length !== 0 && (
          <div>
            <ul className={st.ImageGallery}>
              {pictures.map(obg => (
                <ImageGalleryItem
                  img={obg.previewURL}
                  largeImg={obg.largeImageURL}
                />
              ))}
            </ul>

            <button type="button" onClick={this.handleClick}>
              click my
            </button>
          </div>
        )}
      </>
    );
  }
}

export default ImageGallery;

// .then(img => {
//         this.setState(({ pictures }) => ({
//           pictures: [...pictures, ...img.hits],
//         }));
//       });
