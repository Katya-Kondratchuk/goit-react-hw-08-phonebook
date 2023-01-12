import { combineReducers } from 'redux';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';

export default combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
