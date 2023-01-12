// import rootReducer from './rootReducer';
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({ reducer: rootReducer });
// export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/slice';
import { contactsReducer } from './contacts/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: ['password'],
};

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
