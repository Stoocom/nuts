import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {devUrl} from "../config/config";
import {Inputs} from "../pages/CartPage";

interface IUser {
    isAuth: boolean,
    user: {},
    password: string,
    code: string
}


let initialState = {
    isAuth: false,
    user: {},
    password: null!,
    code: null!
} as IUser

export const signupThunk = createAsyncThunk(
    "user/signupThunk",
    async (contacts: Inputs, { rejectWithValue }) => {
      console.log("registerThunk");
      try {
        const response = await fetch(devUrl("/api/users/sendCode"),{
            method: 'POST',
            body: JSON.stringify(contacts),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        const data = await response.json();
        return data;
      } catch (err: any) {
        return rejectWithValue(err.message);
      }
    }
);
console.log(initialState);

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
    extraReducers: {
        [signupThunk.pending.toString()]: (state: IUser) => {
            console.log("pending");
            //console.log(state.types);
            //console.log(state.isLoading);
        },
        [signupThunk.fulfilled.toString()]: (state, { payload }) => {
            console.log("fulfilled");
            console.log(payload);
            state.password = payload.newPassword;
            state.code = payload.code;
            console.log(state.password);
            console.log(state.code);
        },
        [signupThunk.rejected.toString()]: (state, action) => {
            console.log("rejected");
            //console.log(state.types);
            //console.log(state.isLoading);
        },
    },
})

export const { authOn, authOff } = userReducer.actions

export default userReducer.reducer