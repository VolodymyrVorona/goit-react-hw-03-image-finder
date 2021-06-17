import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer />
      </div>
    );
  }
}

export default App;

// 20666088-0fcbaa9dff33f5180232b13ab
