import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

// Helper function to extract and flatten Firestore data
// This function takes a raw Firestore QueryDocumentSnapshot
// and returns a clean, plain JavaScript object
const extractItemData = (docSnapshot) => {
  // Access the actual fields data using the structure you've been working with
  const fields = docSnapshot._document.data.value.mapValue.fields;

  return {
    // It's good practice to include the Firestore document ID
    id: docSnapshot.id,
    // Extract and convert each field to its simple JavaScript type
    offer: parseInt(fields.offer.integerValue) || fields.offer.doubleValue,
    name: fields.name.stringValue,
    price: fields.price.integerValue || fields.price.doubleValue,
    category: fields.category.stringValue,
    daysToDeliver:
      parseInt(fields.daysToDeliver.integerValue) ||
      fields.daysToDeliver.doubleValue,
    quantity:
      parseInt(fields.quantity.integerValue) || fields.quantity.doubleValue,
    isVeg: parseInt(fields.isVeg.integerValue) === 1,
    subCategory: fields.subCategory.stringValue,
    rating: parseInt(fields.rating.integerValue) || fields.rating.doubleValue,
    image: fields.image.stringValue,
    description: fields.description.stringValue,
    isAvailable: parseInt(fields.isAvailable.integerValue) === 1,
  };
};

// Async thunk for API fetching, also this is used while handling if pending, fulfilled or rejected
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const menuItemsCollectionRef = collection(db, "craftyKoKoItemsTable");
      const fetchData = await getDocs(menuItemsCollectionRef);
      const transformedData = fetchData.docs.map((doc) => extractItemData(doc));
      return transformedData; // Return the plain JavaScript objects
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
    filteredList2nd: [],
    loading: false, // state to handle if pending, fullfilled or rejected when API call by thunk
    error: null,
  },
  reducers: {
    filterByCategory: (state, action) => {
      const filteredItems = state.list.filter(
        (item) =>
          item.category?.toLowerCase().trim() ===
          action.payload.toLowerCase().trim()
      );
      state.filteredList = filteredItems;
      state.filteredList2nd = filteredItems;
    },
    setFilteredRestaurants: (state, action) => {
      state.filteredList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        // if pending
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        //if success
        state.loading = false;
        state.list = action.payload;
        state.filteredList = action.payload;
        state.filteredList2nd = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        //if rejected
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilteredRestaurants, filterByCategory } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
