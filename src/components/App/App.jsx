import { Component } from 'react';

import Searchbar from '../Searchbar';

import css from './app.module.css';

class App extends Component {
  state = {
    items: [],
    search: '',
  };

  onFormSubmit = ({ search }) => {
    this.setState({ search });
  };

  render() {
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
