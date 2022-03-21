import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  profileDetails: [],
};

export const bellefuSlice = createSlice({
  name: "bellefu",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.login = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isLoggedIn } = bellefuSlice.actions;
export const selectLogin = (state) => {
  state.bellefu.login;
};

export default bellefuSlice.reducer;
