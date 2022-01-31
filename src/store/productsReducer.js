import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addAllProductsThunk = createAsyncThunk(
  'products/addAllProductsThunk',
  async (_, { rejectWithValue }) => {
    console.log('addAllProductsThunk');
    try {
      const response = await fetch('/products');
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
)

let initialState = {
  products: null,
  isLoading: false,
  filtered: null,
  error: null
}

export const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByType: (state, action) => {
      state.filtered = state.products.filter(el => el.product_id === action.payload);
    },
    filterBySearchWord: (state, action) => {
      let regexp = new RegExp(action.payload, 'i');
      state.filtered = state.products.filter(el => regexp.test(el.product_name))
    },
  },
  extraReducers: {
    [addAllProductsThunk.pending]: (state) => {
      console.log('pending');
      state.isLoading = true;
    },
    [addAllProductsThunk.fulfilled]: (state, { payload }) => {
      console.log('fulfilled');
      state.isLoading = false;
      state.error = null;
      state.products = payload;
      state.filtered = payload;
    },
    [addAllProductsThunk.rejected]: (state, action) => {
      console.log('rejected');
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

//export const { filterByType, filterBySearchWord } = productsReducer.actions

export default productsReducer.reducer