import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts';

export default combineReducers({
  contacts: contactsReducer,
});
