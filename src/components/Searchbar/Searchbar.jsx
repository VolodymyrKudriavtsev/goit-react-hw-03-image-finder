import PropTypes from 'prop-types';
import { Component } from 'react';

import css from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ search: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            value={search}
            onChange={handleChange}
            name="search"
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
