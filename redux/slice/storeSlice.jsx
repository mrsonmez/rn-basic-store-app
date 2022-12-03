import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    searchItem: "",
  },
  reducers: {
    changeSearch: (state, action) => {
      state.searchItem = action.payload;
    },
  },
});

export const { changeSearch } = storeSlice.actions;

export default storeSlice.reducer;
