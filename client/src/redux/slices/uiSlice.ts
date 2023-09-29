import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: undefined,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
