import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subcatselected: undefined,
  profileDetails: typeof window !== "undefined" ?localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null : null,
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
      state.subcatselected = action.payload
    },
    chooseState: (state, action) => {
      state.stateSelected = action.payload
    },
    setProfileDetails: (state, action) => {
      state.profileDetails = action.payload;
    },
  },



});

// Action creators are generated for each case reducer function
export const { isLoggedIn, isDisabled, chooseCountry, Subcat, selectCat, chooseState, setProfileDetails } = bellefuSlice.actions;

export const login = (state) => state.bellefu.login;
export const profileDetails = (state) => state.bellefu.profileDetails;
export const selectDisable = (state) => state.bellefu.formDisabler;


export default bellefuSlice.reducer;
