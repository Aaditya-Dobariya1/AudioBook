import { configureStore } from "@reduxjs/toolkit";
import { chapterApi } from "../services/chapterApi";

const store = configureStore({
  reducer: {
    [chapterApi.reducerPath]: chapterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chapterApi.middleware),
});

export default store;
