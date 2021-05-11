import { Component } from 'react';

import './Modal.scss';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendelBecdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, alt } = this.props;
    console.log(alt);
    return (
      <div className="Overlay" onClick={this.hendelBecdropClick}>
        <div className="Modal">
          <img src={largeImage} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
