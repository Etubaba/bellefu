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
  catId: null,
  searchFilter: '',
  indexApi: [],
  postAddata: {
    categoryid: "",
    subcategoryid: "",
    title: "",
    location: "",
    countrycode: "",
    states: "",
    phone: "",
    price: null,
    currencyCode: "",
    tag: [],
    description: "",
    images: null,
    userid: "",
    cityCode: "",
    plans: "",
    symbo: "",
  },

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
    handleSearch: (state, action) => {
      state.searchFilter = action.payload;
    },

    chooseCountry: (state, action) => {
      state.countrySelected = action.payload
    },
    chooseState: (state, action) => {
      state.stateSelected = action.payload
    },
    handlePriceUpdate: (state, action) => {
      state.postAddata.price = action.payload
    },
    handleIndexApi: (state, action) => {
      state.indexApi = action.payload
    },
    // postAds reducers please no vex

    handleCatUpdate: (state, action) => {
      state.postAddata.categoryid = action.payload
    },
    handleSubcatUpdate: (state, action) => {
      state.postAddata.subcategoryid = action.payload
    },
    handleTitleUpdate: (state, action) => {
      state.postAddata.title = action.payload
    },
    handleLocationUpdate: (state, action) => {
      state.postAddata.location = action.payload
    },
    handleCountryCodeUpdate: (state, action) => {
      state.postAddata.countrycode = action.payload
    },

    handlePhoneUpdate: (state, action) => {
      state.postAddata.phone = action.payload
    },
    handlePriceUpdate: (state, action) => {
      state.postAddata.price = action.payload
    },
    handleTagUpdate: (state, action) => {
      state.postAddata.tag = action.payload
    },
    handleDescriptionUpdate: (state, action) => {
      state.postAddata.description = action.payload
    },
    handleImagesUpdate: (state, action) => {
      state.postAddata.images = action.payload
    },
    handleUseridUpdate: (state, action) => {
      state.postAddata.userid = action.payload
    },
    handleStateUpdate: (state, action) => {
      state.postAddata.states = action.payload
    },
    setProfileDetails: (state, action) => {
      state.profileDetails = action.payload
    },
    Subcat: (state, action) => {
      state.subcatselected = action.payload
    },
    selectCat: (state, action) => {
      state.catfilter = action.payload

    },

    handlePhoneUpdate: (state, action) => {
      state.postAddata.phone = action.payload
    },
    handleTagUpdate: (state, action) => {
      state.postAddata.tag = action.payload
    },
    handleCurrencyUpdate: (state, action) => {
      state.postAddata.currencyCode = action.payload
    },
    handleCitycodeUpdate: (state, action) => {
      state.postAddata.cityCode = action.payload
    },
    handlePlansUpdate: (state, action) => {
      state.postAddata.plans = action.payload
    },
    handleSymbolUpdate: (state, action) => {
      state.postAddata.symbo = action.payload
    },
    // E don end here 

  },



});

// Action creators are generated for each case reducer function
export const {
  isLoggedIn, isDisabled, chooseCountry, handleIndexApi, handleSearch,
  updateIdpath, fetchData, Subcat, selectCat, chooseState, setProfileDetails,
  handleUseridUpdate, handleImagesUpdate, handleDescriptionUpdate,
  handleTagUpdate, handlePriceUpdate, handlePhoneUpdate,
  handleCountryCodeUpdate, handleLocationUpdate, handleTitleUpdate,
  handleSubcatUpdate, handleCatUpdate, handleStateUpdate,
  handleCurrencyUpdate, handleCitycodeUpdate, handlePlansUpdate,
  handleSymbolUpdate } = bellefuSlice.actions;

export const login = (state) => state.bellefu.login;
export const profileDetails = (state) => state.bellefu.profileDetails;
export const selectDisable = (state) => state.bellefu.formDisabler;
export const homeData = (state) => state.bellefu.indexData
export const changeId = (state) => state.bellefu.catId

// export const selectLogin = (state) => {
//   state.bellefu.login;
// };
// export const selectDisable = (state) => {
//   state.bellefu.formDisabler;
// };
// export const countryChoice = (state) => {
//   state.bellefu
// }

export default bellefuSlice.reducer;
