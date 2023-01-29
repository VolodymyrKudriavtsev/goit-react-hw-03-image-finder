import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Searchbar from '../Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';

import { searchImage } from '../../services/image-api';

import css from './app.module.css';

class App extends Component {
  state = {
    search: '',
    page: 1,
    items: [],
    loading: false,
    error: null,
    showModal: false,
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
    this.setState({ search, page: 1, items: [], error: null });
  };

  async fetchImage() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const { hits } = await searchImage(search, page);
      if (hits.length === 0) {
        return Notify.info(
          'Sorry, there are no images matching your search query. Please try again.',
          { position: 'center-center', fontSize: '17px' }
        );
      }
      this.setState(({ items }) => ({
        items: [...items, ...hits],
      }));
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { onFormSubmit, loadMore, toggleModal } = this;
    const { error, items, loading, showModal } = this.state;

    return (
      <div className={css.container}>
        <Searchbar onSubmit={onFormSubmit} />

        {error && <p className={css.error}>{error.message}</p>}

        {Boolean(items.length) && <ImageGallery items={items} />}

        {loading && <Loader />}

        {Boolean(items.length) && !loading && <Button onClick={loadMore} />}

        <button onClick={toggleModal} type="button">
          Open modal
        </button>
        {showModal && (
          <Modal onClose={toggleModal}>
            <button onClick={toggleModal} type="button">
              Close modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
