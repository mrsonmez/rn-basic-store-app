import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./../slice/storeSlice";

export const store = configureStore({
  reducer: storeReducer,
});
