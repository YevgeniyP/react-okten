import { configureStore } from "@reduxjs/toolkit";

import { characterReducer, episodesReducer } from "./slices";

export const store = configureStore({
  reducer: {
    episodes: episodesReducer,
    characters: characterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
