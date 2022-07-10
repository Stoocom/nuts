import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {devUrl} from "../config/config";
import {Inputs} from "../pages/CartPage";

let initialState = {
    isAuth: false,
    user: null,
    profile: null
}

export const signupThunk = createAsyncThunk(
    "user/signupThunk",
    async (contacts: Inputs, { rejectWithValue }) => {
      console.log("registerThunk");
      try {
        const response = await fetch(devUrl("/api/users/signup"),{
            method: 'POST',
            body: JSON.stringify(contacts),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
      } catch (err: any) {
        return rejectWithValue(err.message);
      }
    }
);


export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authOn: (state) => {
      state.isAuth = true;
    },
    authOff: (state) => {
      state.isAuth = false;
    }
  },
  extraReducers: {}
})

export const { authOn, authOff } = userReducer.actions

export default userReducer.reducer