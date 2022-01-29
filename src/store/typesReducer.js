import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addAllTypesThunk = createAsyncThunk(
  'types/addAllTypesThunk',
  async (_, { rejectWithValue }) => {
    console.log('addAllTypesThunk');
    try {
      const response = await fetch('/types');
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
)

let initialState = {
  types: null,
  isLoading: false,
  error: null
}

export const typesReducer = createSlice({
  name: 'types',
  initialState,
  reducers: {},
  extraReducers: {
    [addAllTypesThunk.pending]: (state) => {
      console.log('pending');
      console.log(state.types);
      console.log(state.isLoading);
      state.isLoading = true;
    },
    [addAllTypesThunk.fulfilled]: (state, { payload }) => {
      console.log('fulfilled');
      state.isLoading = false;
      state.error = null;
      state.types = payload;
      console.log(state.types);
      console.log(state.isLoading);
    },
    [addAllTypesThunk.rejected]: (state, action) => {
      console.log('rejected');
      state.isLoading = false;
      state.error = action.payload;
      console.log(state.types);
      console.log(state.isLoading);
    }
  }
})

export default typesReducer.reducer