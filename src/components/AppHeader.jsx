import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const AppHeader = ({ setCurrentPage, currentPage }) => {
  const handleGoBack = () => {
    setCurrentPage(null);
  };

  if (currentPage === null) {
    return null;
  }

  const borderAnimation = keyframes`
    0% {
      border-color: transparent;
    }
    50% {
      border-color: #ff0000;
    }
    100% {
      border-color: transparent;
    }
  `;

  const Container = styled.div`
    position: absolute;
    z-index: 1300;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: 0.3s;
    overflow: hidden;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      transform: scale(1.1);
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid transparent;
      border-radius: 4px;
      animation: ${borderAnimation} 1s infinite;
      z-index: -1;
      pointer-events: none;
    }
    &:hover::before {
      animation: none;
      border-color: #ff0000;
    }
  `;

  const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  `;

  return (
    <Container onClick={handleGoBack}>
      <StyledButton>
        <FaArrowLeft style={{ marginRight: '5px' }} />
        Go Back
      </StyledButton>
    </Container>
  );
};

export default AppHeader;
