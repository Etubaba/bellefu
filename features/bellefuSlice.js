import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subcatselected: undefined,
  profileDetails: typeof window !== "undefined" ? localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null : null,
  formDisabler: true,
  countrySelected: null,
  catfilter: null,
  login: typeof window !== "undefined" ? localStorage.getItem('login') : null,
  stateSelected: null,
  indexData: null,
  catId: null
};

export const bellefuSlice = createSlice({
  name: "bellefu",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.login = action.payload;
      localStorage.setItem('login', state.login)
    },
    fetchData: (state, action) => {
      state.indexData = action.payload;

    },
    isDisabled: (state, action) => {
      state.formDisabler = action.payload;
    },
    updateIdpath: (state, action) => {
      state.catId = action.payload;
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
export const { isLoggedIn, updateIdpath, fetchData, isDisabled, chooseCountry, Subcat, selectCat, chooseState, setProfileDetails } = bellefuSlice.actions;

export const login = (state) => state.bellefu.login;
export const profileDetails = (state) => state.bellefu.profileDetails;
export const selectDisable = (state) => state.bellefu.formDisabler;
export const homeData = (state) => state.bellefu.indexData


export default bellefuSlice.reducer;
