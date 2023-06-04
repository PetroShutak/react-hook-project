import React from 'react';

const AppHeader = ({ setCurrentPage }) => {
  const handleGoBack = () => {
    setCurrentPage(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        background: '#f2f2f2',
      }}
    >
      <button onClick={handleGoBack}>Go Back to Main Page</button>
    </div>
  );
};

export default AppHeader;
