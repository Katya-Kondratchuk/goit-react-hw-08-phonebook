import { ButtonStyled } from 'components/App.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactOperation } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/selectors';

import {
  ContactListStyled,
  ContactsItem,
  ErrorMessage,
} from './ContactForm.styled';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <ContactListStyled>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <ContactsItem key={nanoid()}>
            <span>{name}:</span>
            <span>{number}</span>
            <ButtonStyled
              type="button"
              disabled={isLoading}
              onClick={() => dispatch(deleteContactOperation(id))}
            >
              Delete
            </ButtonStyled>
          </ContactsItem>
        ))
      ) : (
        <ErrorMessage>'We couldn`t find such a contact'</ErrorMessage>
      )}
    </ContactListStyled>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
