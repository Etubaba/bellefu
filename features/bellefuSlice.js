import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  profileDetails: [],
  formDisabler: true,
  countrySelected: null
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

    chooseCountry: (state, action) => {
      state.countrySelected = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { isLoggedIn, isDisabled, chooseCountry } = bellefuSlice.actions;
export const selectLogin = (state) => {
  state.bellefu.login;
};
export const selectDisable = (state) => {
  state.bellefu.formDisabler;
};
export const countryChoice = (state) => {
  state.bellefu
}

export default bellefuSlice.reducer;
