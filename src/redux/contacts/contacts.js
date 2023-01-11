import { Notify } from 'notiflix';
import {
  addContactOperation,
  deleteContactOperation,
  getContactsOperation,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  filter: '',
};

// const addItemToContacts = (state, action) => {
//   state.contacts.push(action.payload);
// };

// const removeItemFromContacts = (state, action) => {
//   const newArray = state.contacts.filter(
//     contact => contact.id !== action.payload
//   );
//   state.contacts = newArray;
// };

const contacts = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContact: addItemToContacts,
  //   removeContact: removeItemFromContacts,
  //   filterContact: (state, action) => {
  //     state.filter = action.payload;
  //   },
  // },
  extraReducers: {
    [getContactsOperation.fulfilled](state, { payload }) {
      state.contacts = payload.map(contact => {
        return { ...state.contacts, ...contact };
      });
    },
    [addContactOperation.fulfilled](state, { payload }) {
      if (
        state.contacts.some(
          contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        )
      ) {
        Notify.warning(`${payload.name} already exists in phonebook`);
        return state;
      } else {
        Notify.success(`You add contact ${payload.name}`);
        state.contacts.unshift(payload);
      }
    },
    [deleteContactOperation.fulfilled](state, { payload }) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
    },
    // [filterContactOperation.fulfilled](state, { payload }) {
    //    state.filter = payload;
    // },
  },
});

export const contactsReducer = contacts.reducer;
