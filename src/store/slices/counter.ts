import { createSlice } from '@reduxjs/toolkit';

export const {
  reducer: counterReducer,
  actions: { increment, decrement, increaseByAmount },
} = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
