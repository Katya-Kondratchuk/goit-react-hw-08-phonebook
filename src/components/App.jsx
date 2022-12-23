import React from 'react';
import { nanoid } from 'nanoid';

import { ContactForm, ContactList, Filter } from 'components';
import initialData from '../data/data.json';

import { Wrapper } from './App.styled';
import { ErrorMessage } from './ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? initialData
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerAddContact = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };
    setContacts([...contacts, contact]);
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterContacts = event => {
    setFilter(event.target.value.trim());
  };

  const checkDuplitatesName = value =>
    contacts.some(({ name }) => name.toLowerCase() === value.toLowerCase());

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmitForm={handlerAddContact}
        isDublicate={checkDuplitatesName}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterContacts={handleFilterContacts} />
      {contacts.length ? (
        <ContactList
          contacts={visibleContacts}
          handleDeleteContact={handleDeleteContact}
        ></ContactList>
      ) : (
        <ErrorMessage>You don't have contacts</ErrorMessage>
      )}
    </Wrapper>
  );
}
