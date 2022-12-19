import React from 'react';
import { nanoid } from 'nanoid';

import { FormStyled } from './ContactForm.styled';
import { ButtonStyled } from 'components/App.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          <span>Name</span>
          <input
            id={this.nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.numberId}>
          <span>Number</span>
          <input
            id={this.numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <ButtonStyled
          type="submit"
          disabled={!this.state.name && !this.state.number}
        >
          <span>Add contact</span>
        </ButtonStyled>
      </FormStyled>
    );
  }
}

export default ContactForm;
