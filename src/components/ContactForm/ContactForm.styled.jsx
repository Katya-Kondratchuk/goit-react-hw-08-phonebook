import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 300px;
  padding: 30px;
  box-shadow: 0px 0px 42px 28px #a5eaf5;
  display: flex;
  flex-direction: column;
  background-color: azure;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  span {
    margin-bottom: 10px;
  }

  button {
    margin-left: auto;
    margin-right: auto;
  }

  button:disabled {
    background-color: #e2efef;
    color: #c5bfbf;
    border-color: #c5bfbf;
  }
`;

export const ContactListStyled = styled.ul`
  margin-top: 45px;
  box-shadow: 0px 1px 32px 6px #6ae0f3;
  background-color: azure;
  padding: 15px;
`;

export const ContactsItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  span {
    margin-right: 25px;
  }
`;

export const ErrorMessage = styled.span`
  font-weight: 900;
  font-size: 40px;
  color: #103ec0;
  margin-top: 50px;
`;
