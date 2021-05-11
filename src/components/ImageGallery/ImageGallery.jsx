import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import './ImageGallery.scss';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} onClick={onClick} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
