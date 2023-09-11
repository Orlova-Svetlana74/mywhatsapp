import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const whatsApi = createApi({
  reducerPath: 'whatsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com/' }),

  endpoints: (build) => ({
    getMessage: build.mutation({
      query: ({ idInstance, apiTokenInstance }) =>
        `waInstance{{idInstance}}/receiveNotification/{{apiTokenInstance}}`, //получение уведомлений
      method: 'GET',
    }),

    sendMessage: build.mutation({
      query: ({ idInstance, apiTokenInstance }) =>
        `waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}`, //отправка сообщений
      method: 'POST',
    }),
  }),
});

export const { useGetMessageMutation, useSendMessageMutation } = whatsApi;
