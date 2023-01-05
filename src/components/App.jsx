import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ContactForm, ContactList, Filter } from 'components';

import { Wrapper } from './App.styled';
import { ErrorMessage } from './ContactForm/ContactForm.styled';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkDuplitatesName = value =>
    contacts.some(({ name }) => name.toLowerCase() === value.toLowerCase());

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm isDublicate={checkDuplitatesName} />
      <h2>Contacts</h2>
      <Filter filter={filter} />
      {contacts.length ? (
        <ContactList contacts={visibleContacts}></ContactList>
      ) : (
        <ErrorMessage>You don't have contacts</ErrorMessage>
      )}
    </Wrapper>
  );
}
