import { configureStore } from '@reduxjs/toolkit';
import { whatsApi } from './whatsApi';
import { authApi } from './authApi';
import { addMessage } from './messagesSlice';

export const store = configureStore({
  reducer: {
    [whatsApi.reducerPath]: whatsApi.reducer,
    addMessage,

    [authApi.reducerPath]: authApi.reducer, // Подключение RTK Query к хранилищу
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([whatsApi.middleware, authApi.middleware]),
});
