import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { addContactOperation } from 'redux/contacts/operations';

import { FormStyled } from './ContactForm.styled';
import { ButtonStyled } from 'components/App.styled';

function ContactForm({ isDublicate }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    isDublicate(name)
      ? alert('This name already exist')
      : dispatch(addContactOperation({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        <span>Name</span>
        <input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label htmlFor={numberId}>
        <span>Number</span>
        <input
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
      </label>

      <ButtonStyled type="submit">
        <span>Add contact</span>
      </ButtonStyled>
    </FormStyled>
  );
}

export default ContactForm;
