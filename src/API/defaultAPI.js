import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL;
const axiosDB = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getContacts = () => {
  try {
    return axiosDB.get('/contacts');
  } catch (error) {
    return {
      error,
    };
  }
};

export const postContact = data => {
  try {
    return axiosDB.post('/contacts', JSON.stringify(data));
  } catch (error) {
    return {
      error,
    };
  }
};

export const deleteContact = id => {
  try {
    return axiosDB.delete(`/contacts/${id}`);
  } catch (error) {
    return {
      error,
    };
  }
};
