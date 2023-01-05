import { combineReducers } from 'redux';
import contacts from './contacts/contacts';

export default combineReducers({
  contacts: contacts,
  filter: null,
});
