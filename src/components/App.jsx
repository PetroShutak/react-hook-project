import React, { useState } from 'react';
import Feedback from './FeedbackDirectory/FeedbackApp';
import PhoneBook from './PhoneBookDirectory/PhoneBookApp';
import ImageFinder from './ImageFinder/ImageFinderApp';
import AppHeader from './FeedbackDirectory/FeedbackAppHeader';

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
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          color: '#010101'
        }}
        >
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

  return ( 
  <div>
    <AppHeader setCurrentPage={setCurrentPage} />
    {renderPage()}
    </div>
    )
};

export default App;
