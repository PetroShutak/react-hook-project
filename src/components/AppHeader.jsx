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
    transition: '0.3s',
    overflow: 'hidden',
    ":hover": {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        transform: 'scale(1.1)',
    },
    "::before": {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: '2px solid transparent',
        borderRadius: '4px',
        animation: 'border-animation 1s infinite',
        zIndex: -1,
        pointerEvents: 'none',
    },
    ":hover::before": {
        animation: 'none',
        borderColor: '#ff0000',
    },
    "@keyframes border-animation": {
        "0%": {
            borderColor: 'transparent',
        },
        "50%": {
            borderColor: '#ff0000',
        },
        "100%": {
            borderColor: 'transparent',
        },
    },
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
