import { createSlice } from '@reduxjs/toolkit';

export const {
  reducer: detailReducer,
  actions: { getDetail },
} = createSlice({
  name: 'detail',
  initialState: {
    value: 0,
  },
  reducers: {
    getDetail: (state) => {
      state.value += 1;
    },
  },
});
