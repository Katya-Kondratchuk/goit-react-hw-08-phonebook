import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactForm, ContactList, Filter } from 'components';
import initialData from '../data/data.json';

import { Wrapper } from './App.styled';
import { ErrorMessage } from './ContactForm/ContactForm.styled';

export class App extends React.Component {
  state = {
    contacts: initialData,
    filter: '',
  };

  handlerAddContact = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    const isRepeat = this.state.contacts.map(({ name }) => name.toLowerCase());
    isRepeat.includes(data.name.toLowerCase())
      ? Notify.warning(`${data.name} is already in contacts`)
      : // alert(`${data.name} is already in contacts`)
        this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterContacts = event => {
    this.setState({ filter: event.target.value.trim() });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) this.setState({ contacts: parseContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handlerAddContact} />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleFilterContacts={this.handleFilterContacts}
        />
        {contacts.length ? (
          <ContactList
            contacts={visibleContacts}
            handleDeleteContact={this.handleDeleteContact}
          ></ContactList>
        ) : (
          <ErrorMessage>You don't have contacts</ErrorMessage>
        )}
      </Wrapper>
    );
  }
}
