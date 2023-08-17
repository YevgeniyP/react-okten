import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
} from "@reduxjs/toolkit";

import { characterService } from "../../services/characterService";

const initialState = {
  isLoading: false,
  characters: [],
  header: "",
};

//
const getList = createAsyncThunk("characterSlice/getList", async ({ id }) => {
  try {
    const { data } = await characterService.getList(id);
    return data;
  } catch (e) {
    console.error(e.response.data);
  }
});

const characterSlice = createSlice({
  name: "characterSlice",
  initialState,
  reducers: {
    setEpisodeName: (state, action) => {
      state.header = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.fulfilled, (state, action) => {
        state.characters = action.payload;
      })
      .addMatcher(isPending(), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isFulfilled(), (state) => {
        state.isLoading = false;
      });
  },
});
const {
  reducer,
  actions: { setEpisodeName },
} = characterSlice;

export const characterReducer = reducer;

export const characterAction = {
  getList,
  setEpisodeName,
};
