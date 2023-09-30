import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: undefined,
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
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
