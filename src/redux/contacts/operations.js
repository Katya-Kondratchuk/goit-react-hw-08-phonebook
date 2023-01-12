import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, getContacts, postContact } from 'API/defaultAPI';

export const getContactsOperation = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactOperation = createAsyncThunk(
  'contacts/postContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await postContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactOperation = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteContact(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
