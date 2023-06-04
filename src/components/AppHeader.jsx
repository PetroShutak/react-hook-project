import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const AppHeader = ({ setCurrentPage, currentPage  }) => {
  const handleGoBack = () => {
    setCurrentPage(null);
  };

  if (currentPage === null) {
    return null; 
  }

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: '1300',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        hover: 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4)',

    }}
    onClick={handleGoBack}
    >
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        <FaArrowLeft style={{ marginRight: '5px' }} />
        Go Back 
      </button>
    </div>
  );
};

export default AppHeader;
