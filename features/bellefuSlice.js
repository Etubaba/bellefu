import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  profileDetails: [],
  formDisabler:true,
};

export const bellefuSlice = createSlice({
  name: "bellefu",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.login = action.payload;
    },


    isDisabled: (state, action) => {
      state.formDisabler = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isLoggedIn,isDisabled } = bellefuSlice.actions;
export const selectLogin = (state) => {
  state.bellefu.login;
};
export const selectDisable = (state) => {
  state.bellefu.formDisabler;
};

export default bellefuSlice.reducer;
