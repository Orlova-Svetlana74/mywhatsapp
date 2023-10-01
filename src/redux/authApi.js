import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com', }),
  endpoints: (builder) => ({
    AccountUser: builder.query({
      query: ({idInstance, apiTokenInstance}) => ({
        url: `/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
        method: 'GET',
        // body:idInstance, apiTokenInstance 
      }),
    }),
  }),
});
export const { useLazyAccountUserQuery } = authApi;
