import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getGallery from './services/getGallery';
import ImageGallery from './Components/ImageGallery';
import Searchbar from './Components/Searchbar';
import Button from './Components/Button';
import Modal from './Components/Modal';

class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    page: 1,
    largeImgAlt: '',
    largeImgURL: '',
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }
  }

  handleChangeQuery = data => {
    this.setState({ searchQuery: data, page: 1, gallery: [] });
  };

  handleImgClick = e => {
    const { alt } = e.target.attributes;

    this.setState(
      {
        largeImgURL: e.target.dataset.img,
        largeImgAlt: alt,
      },
      this.toggleModal,
    );

    // this.toggleModal();
  };

  fetchImg = () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    getGallery(searchQuery, page)
      .then(({ hits }) => {
        this.setState(({ gallery, page }) => ({
          gallery: [...gallery, ...hits],
          page: page + 1,
        }));
      })
      .catch(error => toast.error(`${error.message} 🙁`, { autoClose: 3000 }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { gallery, isLoading, showModal, largeImgURL, largeImgAlt } =
      this.state;

    return (
      <div className="App">
        <Searchbar onFormSubmit={this.handleChangeQuery} />
        <ImageGallery gallery={gallery} onImgClick={this.handleImgClick} />
        {gallery.length > 0 && !isLoading && (
          <Button onButtonClick={this.fetchImg} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImgURL} alt={largeImgAlt} width="960" />
          </Modal>
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
