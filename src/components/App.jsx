import React, { useState } from 'react';
import Feedback from './FeedbackDirectory/FeedbackApp';
import PhoneBook from './PhoneBookDirectory/PhoneBookApp';
import ImageFinder from './ImageFinder/ImageFinderApp';

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const renderPage = () => {
    if (currentPage === 'feedback') {
      return <Feedback />;
    } else if (currentPage === 'phonebook') {
      return <PhoneBook />;
    } else if (currentPage === 'imagefinder') {
      return <ImageFinder />;
    } else {
      return (
        <div>
          <h1>Welcome to the Main Page</h1>
          <button onClick={() => setCurrentPage('feedback')}>
            Go to Feedback
          </button>
          <button onClick={() => setCurrentPage('phonebook')}>
            Go to Phone Book
          </button>
          <button onClick={() => setCurrentPage('imagefinder')}>
            Go to Image Finder
          </button>
        </div>
      );
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;
