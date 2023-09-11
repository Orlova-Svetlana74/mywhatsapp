import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com/' }),
  endpoints: (builder) => ({
    AccountUser: builder.mutation({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `waInstance{{idInstance}}/getSettings/{{apiTokenInstance}}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useAccountUserMutation } = authApi;
