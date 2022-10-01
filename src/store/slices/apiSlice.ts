import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    mode: 'cors'
  }),
  endpoints: (builder) => ({})
})
