import { createSlice } from '@reduxjs/toolkit';


let initialState = {
  isAuth: false,
  user: null
}

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