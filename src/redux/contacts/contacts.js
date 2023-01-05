const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
};

const addItemToContacts = (state, action) => {
  state.contacts.push(action.payload);
};

const removeItemFromContacts = (state, action) => {
  const newArray = state.contacts.filter(
    contact => contact.id !== action.payload
  );
  state.contacts = newArray;
};

const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: addItemToContacts,
    removeContact: removeItemFromContacts,
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } = contacts.actions;

export const contactsReducer = contacts.reducer;
