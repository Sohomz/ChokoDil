import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for API fetching
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://localhost:7051/api/MenuItem");
      const json = await response.json();
      return json;
    } catch (error) {
      return rejectWithValue("Failed to fetch restaurants");
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    list: [],
    filteredList: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterByCategory: (state, action) => {
      const filteredItems = state.list.filter(
        (item) =>
          item.category?.toLowerCase().trim() ===
          action.payload.toLowerCase().trim()
      );

      return {
        ...state,
        filteredList: filteredItems,
      };
    },
    setFilteredRestaurants: (state, action) => {
      state.filteredList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; //setting the list after getting data from API fetchRestaurants try catch
        state.filteredList = action.payload; // Set both lists initially
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilteredRestaurants, filterByCategory } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
