import { Component } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import ImagesApi from './services/imagesApi';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }

    if (currentPage !== 2 && prevState.currentPage !== currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  openModal = imageUrl => {
    this.setState({
      largeImage: imageUrl,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      largeImage: '',
      showModal: false,
    });
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    ImagesApi.fetchImages({ searchQuery, currentPage })
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const {
      images,
      isLoading,
      showModal,
      largeImage,
      tags,
      error,
    } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h1>Images not found!</h1>}

        {isLoading && <Loader />}

        <ImageGallery images={images} onClick={this.openModal} />

        {images.length > 0 && (
          <Button type="button" text="Load more" onClick={this.fetchImages} />
        )}

        {showModal && (
          <Modal largeImage={largeImage} alt={tags} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
