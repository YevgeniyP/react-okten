import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
} from "@reduxjs/toolkit";

import { episodesService } from "../../services";

const initialState = {
  isLoading: false,
  episodes: [],
  prevPage: null,
  nextPage: null,
};

const getAll = createAsyncThunk("episodesSlice/getAll", async ({ page }) => {
  try {
    const { data } = await episodesService.getAll(page);
    return data;
  } catch (e) {
    console.error(e.response.data);
  }
});

const episodesSlice = createSlice({
  name: "episodesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.episodes = action.payload.results.map((episode) => ({
          ...episode,
          characters: episode.characters
            .map((character) => character.split("/").slice(-1)[0])
            .join(","),
        }));
        state.prevPage = action.payload.info.prev;
        state.nextPage = action.payload.info.next;
      })
      .addMatcher(isPending(), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isFulfilled(), (state) => {
        state.isLoading = false;
      });
  },
});

export const episodesReducer = episodesSlice.reducer;
export const episodesAction = {
  getAll,
};
