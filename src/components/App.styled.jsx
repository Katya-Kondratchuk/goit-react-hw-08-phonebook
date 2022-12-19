import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  h2 {
    margin-bottom: 5px;
    margin-top: 30px;
  }
`;

export const ButtonStyled = styled.button`
  color: #6fcef4;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
  cursor: pointer;
  background: transparent;
  border: 2px solid #91c9ff;
  outline: none;
  transition: 1s ease-in-out;

  :hover {
    transition: 1s ease-in-out;
    background: #4f95da;
  }
`;
