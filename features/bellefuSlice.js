import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wahala: undefined,
  profileDetails: [],
  formDisabler: true,
  countrySelected: null,
  catfilter: null,
  login: null,
  stateSelected: null,
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
    },
    selectCat: (state, action) => {
      state.catfilter = action.payload
    },

    Subcat: (state, action) => {
      state.wahala = action.payload
    },
    chooseState: (state, action) => {
      state.stateSelected = action.payload
    }
  },



});

// Action creators are generated for each case reducer function
export const { isLoggedIn, isDisabled, chooseCountry, Subcat, selectCat, chooseState } = bellefuSlice.actions;

export const selectLogin = (state) => {
  state.bellefu.login;
};
export const selectDisable = (state) => {
  state.bellefu.formDisabler;
};


export default bellefuSlice.reducer;
