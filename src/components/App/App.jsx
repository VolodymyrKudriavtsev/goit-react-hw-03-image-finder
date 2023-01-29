import { Component } from 'react';

import Searchbar from '../Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';

import { searchImage } from '../../services/image-api';

import css from './app.module.css';

class App extends Component {
  state = {
    search: '',
    page: 1,
    items: [],
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.fetchImage();
    }
  }

  onFormSubmit = search => {
    this.setState({ search, page: 1, items: [] });
  };

  async fetchImage() {
    try {
      // this.setState({loading: true});
      const { search, page } = this.state;
      const data = await searchImage(search, page);
      console.log(data.hits);
      this.setState(prevState => ({
        items: [...prevState.items, ...data.hits],
      }));
      // this.setState(({items}) => ({
      //     items: [...items, ...data]
      // }))
    } catch (error) {
      // this.setState({error: error.message})
    } finally {
      // this.setState({loading: false})
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { onFormSubmit, loadMore } = this;

    return (
      <div className={css.container}>
        <Searchbar onSubmit={onFormSubmit} />
        <ImageGallery items={this.state.items} />
        <Loader />
        <Button onClick={loadMore} />
      </div>
    );
  }
}

export default App;
