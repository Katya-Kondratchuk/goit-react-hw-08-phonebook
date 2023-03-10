import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_URL;
// const token = JSON.parse(localStorage.getItem('persist:auth'));

// const axiosDB = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${JSON.parse(token.token)}`,
//   },
// });

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = () => {
  try {
    return axios.get('/contacts');
  } catch (error) {
    return {
      error,
    };
  }
};

export const postContact = data => {
  try {
    return axios.post('/contacts', JSON.stringify(data));
  } catch (error) {
    return {
      error,
    };
  }
};

export const deleteContact = id => {
  try {
    return axios.delete(`/contacts/${id}`);
  } catch (error) {
    return {
      error,
    };
  }
};
