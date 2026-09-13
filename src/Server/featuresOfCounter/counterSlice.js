import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementBy1: (state) => {
      state.value += 1;
    },
    decrementBy1: (state) => {
      state.value -= 1;
    },
    incrementByNum: (state, actions) => {
      state.value += actions.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementBy1, decrementBy1, incrementByNum, reset } =
  counter.actions;

export default counter.reducer;
