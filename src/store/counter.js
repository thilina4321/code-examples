import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.count++;
    },
    decreaseByFive(state, action) {
      state.count = state.count - action.payload;
    },
  },
});

export default slice;
