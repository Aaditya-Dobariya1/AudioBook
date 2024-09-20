import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../services/booksApi";
import { chapterApi } from "../services/chapterApi";

const store = configureStore({
  reducer: {
    [chapterApi.reducerPath]: chapterApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(chapterApi.middleware)
      .concat(booksApi.middleware), // Add booksApi middleware here
});

export default store;
