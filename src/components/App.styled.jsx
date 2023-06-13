import styled from 'styled-components';

const AppContainer = styled.div`
  height: calc(100vh - 40px);
  width: calc(100vw -30px);
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  font-family: Arial, sans-serif;
  background-image: url(https://textbook.edu.goit.global/react-zr7b4k/v1/uk/img/lesson-07/hooks-banner.jpg);
  background-size: contain 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: ${props => props.backgroundColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export { AppContainer, Button };
