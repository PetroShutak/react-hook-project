import React, { useState, useEffect } from 'react';
import Feedback from './FeedbackDirectory/FeedbackApp';
import PhoneBook from './PhoneBookDirectory/PhoneBookApp';
import ImageFinder from './ImageFinder/ImageFinderApp';
import AppHeader from './AppHeader';
import { AppContainer, Button } from './App.styled';
import Loader from './ImageFinder/Loader/Loader';

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentPage) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'feedback') {
      return <Feedback />;
    } else if (currentPage === 'phonebook') {
      return <PhoneBook />;
    } else if (currentPage === 'imagefinder') {
      return <ImageFinder />;
    } else {
      return (
        <AppContainer>
          <h1>Introduction to React</h1>
          <Button
            backgroundColor="#2196f3"
            hoverColor="#1565c0"
            onClick={() => handlePageChange('feedback')}
          >
            Go to Feedback
          </Button>
          <Button
            backgroundColor="#4caf50"
            hoverColor="#388e3c"
            onClick={() => handlePageChange('phonebook')}
          >
            Go to Phone Book
          </Button>
          <Button
            backgroundColor="#f44336"
            hoverColor="#d32f2f"
            onClick={() => handlePageChange('imagefinder')}
          >
            Go to Image Finder
          </Button>
          {loading && <Loader />}
        </AppContainer>
      );
    }
  };

  return (
    <div>
      {currentPage && <AppHeader setCurrentPage={setCurrentPage} />}
      {loading ? <Loader /> : renderPage()}
    </div>
  );
};

export default App;
