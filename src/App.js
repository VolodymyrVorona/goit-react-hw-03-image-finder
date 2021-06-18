import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from './Components/ImageGallery';
import Searchbar from './Components/Searchbar';

class App extends Component {
  state = {
    gallery: null,
    inputValue: '',
    loading: false,
  };

  handleSubmit = data => {
    this.setState({ inputValue: data });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onFormSubmit={this.handleSubmit} />
        <ImageGallery ImagesName={this.state.inputValue} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
