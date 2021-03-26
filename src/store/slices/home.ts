import { createSlice } from '@reduxjs/toolkit';

export const {
  reducer: homeReducer,
  actions: { getHome },
} = createSlice({
  name: 'home',
  initialState: {
    value: 0,
  },
  reducers: {
    getHome: (state) => {
      state.value += 1;
    },
  },
});
