import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContent, ModalImage } from './Modal.styled';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleCloseClick = () => {
    onClose();
  };

  const handleImageClick = e => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={handleCloseClick}>
      <ModalContent>
        <ModalImage src={largeImageURL} alt="Modal" onClick={handleImageClick} />
      </ModalContent>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;


// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { Overlay, ModalContent, ModalImage } from './Modal.styled';

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.key === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleCloseClick = () => {
//     this.props.onClose();
//   };

//   handleImageClick = e => {
//     e.stopPropagation();
//   };

//   render() {
//     const { largeImageURL } = this.props;

//     return (
//       <Overlay onClick={this.handleCloseClick}>
//         <ModalContent>
//           <ModalImage src={largeImageURL} alt="Modal" onClick={this.handleImageClick} />

//         </ModalContent>
//       </Overlay>
//     );
//   }
// }

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };


// export default Modal;
