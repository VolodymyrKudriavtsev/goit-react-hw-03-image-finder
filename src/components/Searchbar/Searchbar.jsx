import { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { onSubmit } = this.props;
    const { search } = this.state;
    e.preventDefault();
    onSubmit(search);
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

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
            required
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
