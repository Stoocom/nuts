import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { devUrl } from "../config/config";

export const addAllProductsThunk = createAsyncThunk(
  "products/addAllProductsThunk",
  async (_, { rejectWithValue }) => {
    console.log("addAllProductsThunk");
    try {
      const response = await fetch(devUrl("/api/products"));
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addProductsByTypeThunk = createAsyncThunk(
  "products/addProductsByTypeThunk",
  async ({ id }, { rejectWithValue }) => {
    console.log("addProductsByTypeThunk");
    try {
      const response = await fetch(`/type/${id}`);
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

let initialState = {
  products: null,
  lastType: "all",
  isLoading: false,
  filtered: null,
  error: null,
};

export const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeLastType: (state, action) => {
      console.log("changeLastType " + action.payload);
      console.log(state.lastType);
      state.lastType = action.payload;
      console.log(state.lastType);
    },
    filterByType: (state, action) => {
      console.log("filterByType");
      console.log(action.payload);
      state.filtered = state.products.filter(
        (el) => el.type === action.payload
      );
    },
    filterBySearchWord: (state, action) => {
      console.log("filterBySearchWord");
      let regexp = new RegExp(action.payload, "i");
      state.filtered = state.products.filter((el) =>
        regexp.test(el.product_name)
      );
    },
  },
  extraReducers: {
    [addAllProductsThunk.pending]: (state) => {
      console.log("addAllProductsThunk pending");
      state.isLoading = true;
    },
    [addAllProductsThunk.fulfilled]: (state, { payload }) => {
      console.log("addAllProductsThunk fulfilled");
      state.isLoading = false;
      state.error = null;
      state.products = payload;
      state.filtered = payload;
    },
    [addAllProductsThunk.rejected]: (state, action) => {
      console.log("addAllProductsThunk rejected");
      state.isLoading = false;
      state.error = action.payload;
    },
    [addProductsByTypeThunk.pending]: (state) => {
      console.log("addProductsByTypeThunk pending");
      state.isLoading = true;
    },
    [addProductsByTypeThunk.fulfilled]: (state, { payload }) => {
      console.log("addProductsByTypeThunk fulfilled");
      state.isLoading = false;
      state.error = null;
      state.filtered = payload;
    },
    [addProductsByTypeThunk.rejected]: (state, action) => {
      console.log("addProductsByTypeThunk rejected");
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { changeLastType, filterByType, filterBySearchWord } =
  productsReducer.actions;

export default productsReducer.reducer;
