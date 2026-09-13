import { createSlice } from "@reduxjs/toolkit";

export const tempCalculate = createSlice({
  name: "tempCalculate",
  initialState: {
    F: 32,
    C: 0,
  },
  reducers: {
    calculateCTemp: (state, actions) => {
      const f = Number(actions.payload)
      state.F = f;
      state.C = (f - 32) * (5 / 9);
    },
    calculateFTemp:(state, actions)=>{
      const c = Number(actions.payload);
      state.C = c;
      state.F = c * (9 / 5) + 32;
    }
  },
});

export const {calculateFTemp, calculateCTemp} = tempCalculate.actions

export default tempCalculate.reducer
