import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import st from './Searchbar.module.css';

class Searchbar extends Component {
  state = { value: '' };

  handleInputChange = e => {
    if (e.currentTarget.value === this.state.value) {
      return toast.error('Сделайте ваш запрос 😃', { autoClose: 3000 });
    }

    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.error('Сделайте ваш запрос 😃', { autoClose: 3000 });
    }

    this.props.onFormSubmit(this.state.value.toLowerCase());
  };

  render() {
    return (
      <header className={st.Searchbar}>
        <form className={st.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={st.SearchFormInput}
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button className={st.Button} type="submit">
            <span className={st.Label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
