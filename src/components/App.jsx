import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm, ContactList, Filter } from 'components';
import { selectContacts, selectFilter } from 'redux/selectors';
import { getContactsOperation } from 'redux/contacts/operations';

import { Wrapper } from './App.styled';
import { ErrorMessage } from './ContactForm/ContactForm.styled';

export function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  const isDublicate = value => {
    return contacts.some(
      item => item.name.toLowerCase() === value.toLowerCase()
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm isDublicate={isDublicate} />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        <ContactList contacts={visibleContacts}></ContactList>
      ) : (
        <ErrorMessage>You don't have contacts</ErrorMessage>
      )}
    </Wrapper>
  );
}
