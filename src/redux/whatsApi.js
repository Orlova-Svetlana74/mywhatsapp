import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const whatsApi = createApi({
  reducerPath: 'whatsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com/' }),

  endpoints: (build) => ({
    getMessage: build.query({
      query: ({ idInstance, apiTokenInstance }) =>
        `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`, //получение уведомлений
      method: 'GET',
    }),

    sendMessage: build.mutation({
      query: ({ idInstance, apiTokenInstance, props }) => {
        return {
          url:`waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
          method: 'POST',
          body: props
        }
      }
        , //отправка сообщений
      

    }),
  }),
});

export const { useSendMessageMutation, useLazyGetMessageQuery } = whatsApi;
