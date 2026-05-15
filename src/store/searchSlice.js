import { createSlice } from "@reduxjs/toolkit";

// Search slice to manage product search state using Redux
const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "", // current search input value
  },
  reducers: {
    // Update search query when user types
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },

    // Clear search query
    clearSearchQuery: (state) => {
      state.query = "";
    },
  },
});

export const { setSearchQuery, clearSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
