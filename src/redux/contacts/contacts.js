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

const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContactsOperation.fulfilled](state, { payload }) {
      state.contacts = payload;
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
  },
});

export const contactsReducer = contacts.reducer;
export const { filterContact } = contacts.actions;
