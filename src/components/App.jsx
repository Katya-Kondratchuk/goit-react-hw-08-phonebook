import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm, ContactList, Filter } from 'components';

import { Wrapper } from './App.styled';
import { ErrorMessage } from './ContactForm/ContactForm.styled';
import { getContactsOperation } from 'redux/contacts/operations';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  const isDublicate = value => {
    contacts.some(item => item.name.toLowerCase() === value.toLowerCase());
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
