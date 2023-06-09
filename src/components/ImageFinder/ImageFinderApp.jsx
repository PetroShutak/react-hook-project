import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'utils/fetchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppStyled } from './App.styled';
import { scrollToNewItems } from 'utils/scrollTo';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isShowButton, setIsShowButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query === '') {
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetchImages(query, currentPage);
        const fetchedImages = response.hits;
        const perPage = 12;
        const page = response.totalHits / perPage;
        const total = response.total;

        if (fetchedImages.length === 0 && fetchedImages.length <= 12) {
          setIsLoading(false);
          toast.error('No images found');
        } else {
          setIsLoading(true);
        }

        if (currentPage === 1) {
          notify('Loaded images.', total);
        }
        if (currentPage !== 1) {
          scrollToNewItems();
        }

        if (currentPage < Math.ceil(page)) {
          setIsShowButton(true);
        } else {
          setIsShowButton(false);
          notify('End of images list.', total);
        }
        setImages(prevImages => [...prevImages, ...fetchedImages]);
        // scrollToNewItems();
      } catch (error) {
        notify('Invalid request.');
      }

      setIsLoading(false);
    };

    fetchData();
  }, [query, currentPage]);

  const handleSearchSubmit = query => {
    setImages([]);
    setCurrentPage(1);
    setQuery(query);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const notify = (message, count) => {
    toast(`${message} Found: ${count} pcs.`);
  };

  const handleOpenModal = selectedImage => {
    setSelectedImage(selectedImage);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ToastContainer />
      <Searchbar onSubmit={handleSearchSubmit} />
      <AppStyled>
        <ImageGallery images={images} onOpenModal={handleOpenModal} />
        {images.length > 0 && !isLoading && isShowButton && (
          <Button onClick={handleLoadMore} />
        )}
        {isLoading && <Loader />}
        {selectedImage && (
          <Modal
            largeImageURL={selectedImage.largeImageURL}
            onClose={handleCloseModal}
          />
        )}
      </AppStyled>
    </>
  );
};

App.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
  selectedImage: PropTypes.object,
};

export default App;

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { fetchImages } from 'utils/fetchImages';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';
// import { AppStyled } from './App.styled';
// import { scrollToNewItems } from 'utils/scrollTo';

// const App = () => {
//   const [images, setImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [query, setQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [totalCount, setTotalCount] = useState(0);

//   const handleSearchSubmit = async query => {
//     setImages([]);
//     setCurrentPage(1);
//     setQuery(query);
//     setIsLoading(true);

//     try {
//       const fetchedImages = await fetchImages(query, 1);

//       if (fetchedImages.length === 0 && fetchedImages.length <= 12) {
//         setIsLoading(false);
//         notify('No images found.', totalCount);
//       } else {
//         const totalCount = fetchedImages.length;
//         notify('Loaded first images.', totalCount);
//       }
//       setImages(fetchedImages);
//     } catch (error) {
//       notify('Invalid request.', totalCount);
//     }

//     setIsLoading(false);
//   };

//   useEffect(() => {
//     setTotalCount(prevState => prevState + images.length);
//   }, [images]);

//   const handleLoadMore = async () => {
//     const nextPage = currentPage + 1;

//     setIsLoading(true);

//     try {
//       const fetchedImages = await fetchImages(query, nextPage);
//       if (fetchedImages.length === 0 && fetchedImages.length <= 12) {
//         notify('No more images found.', fetchedImages.length);
//         setIsLoading(false);

//         return;
//       }
//       setImages(prevState => [...prevState, ...fetchedImages]);
//       setCurrentPage(nextPage);
//     } catch (error) {
//       console.log(error);
//     }

//     setIsLoading(false);
//     const totalCount = images.length;
//     notify('Loaded next images.', totalCount);
//     scrollToNewItems();
//   };

//   const notify = (message, totalCount) => {
//     toast(`${message} Found: ${totalCount} pcs.`);
//   };

//   const handleOpenModal = selectedImage => {
//     setSelectedImage(selectedImage);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   const isShowButton =
//     images.length > 0 &&
//     !isLoading &&
//     images.length >= 12 &&
//     images.length % 12 === 0;

//   return (
//     <>
//       <ToastContainer />
//       <Searchbar onSubmit={handleSearchSubmit} />
//       <AppStyled>
//         <ImageGallery images={images} onOpenModal={handleOpenModal} />
//         {isShowButton && <Button onClick={handleLoadMore} />}
//         {isLoading && <Loader />}
//         {selectedImage && (
//           <Modal
//             largeImageURL={selectedImage.largeImageURL}
//             onClose={handleCloseModal}
//           />
//         )}
//       </AppStyled>
//     </>
//   );
// };

// App.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.object),
//   currentPage: PropTypes.number,
//   query: PropTypes.string,
//   isLoading: PropTypes.bool,
//   selectedImage: PropTypes.object,
// };

// export default App;