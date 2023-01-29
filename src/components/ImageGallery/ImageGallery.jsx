import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './image-gallery.module.css';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL, tags }) => (
    <ImageGalleryItem key={id} imgLink={webformatURL} imgAlt={tags} />
  ));
  return <ul className={css.gallery}>{elements}</ul>;
};

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default ImageGallery;
