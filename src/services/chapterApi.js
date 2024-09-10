import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chapterApi = createApi({
  reducerPath: "chapterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://https://fb24-47-247-94-66.ngrok-free.app/",
  }),
  endpoints: (builder) => ({
    getChapters: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetChaptersQuery } = chapterApi;
