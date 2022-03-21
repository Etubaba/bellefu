import { configureStore } from "@reduxjs/toolkit";
import bellefuReducer from "./bellefuSlice";

export const store = configureStore({
  reducer: {
    bellefu: bellefuReducer,
  },
});
