import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  currUserData: {},
  newCheckoutAdded: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },

    setNewCheckout(state) {
      state.newCheckoutAdded = !state.newCheckoutAdded;
    },

    setCurrUserData(state, action) {
      state.currUserData = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
