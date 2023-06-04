import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #010101;
  font-family: Arial, sans-serif;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

export { AppContainer, Button };