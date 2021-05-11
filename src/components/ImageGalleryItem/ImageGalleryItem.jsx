import PropTypes from 'prop-types';

import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, tags, webformatURL, largeImageURL }) => (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onClick(largeImageURL, tags)}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
