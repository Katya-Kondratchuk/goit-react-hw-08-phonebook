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
  isLoading: false,
  error: null,
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
    [getContactsOperation.pending](state) {
      state.isLoading = true;
    },
    [getContactsOperation.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.contacts = payload;
    },
    [getContactsOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContactOperation.pending](state) {
      state.isLoading = true;
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
    [addContactOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContactOperation.pending](state) {
      state.isLoading = true;
    },
    [deleteContactOperation.fulfilled](state, { payload }) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
    },
    [deleteContactOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contacts.reducer;
export const { filterContact } = contacts.actions;
