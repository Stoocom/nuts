import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  cartProducts: [],
  totalSum: 0,
  isLoading: false,
  error: null
}

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddProductToCart: (state, action) => {
      //console.log('AddProductToCart');
      if (state.cartProducts.length === 0) {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      } else {
        const findProd = state.cartProducts.find((prod) => {
          return prod.product_id === action.payload.product_id
        });
        if (findProd) {
          const findedIndex = state.cartProducts.findIndex((prod) => prod.product_id === findProd.product_id);
          state.cartProducts[findedIndex].quantity += 1;
        } else {
          state.cartProducts.push({ ...action.payload, quantity: 1 });
        }
      }
    },
    removeProductFromCart: (state, action) => {
      //console.log('removeProductToCart');
      if (state.cartProducts.length > 1) {
        const findId = state.cartProducts.findIndex((prod) => prod.product_id === action.payload.product_id);
          if (state.cartProducts[findId].quantity === 1) {
            state.cartProducts.splice(findId, 1);
          } else {
            state.cartProducts[findId].quantity -= 1;
          }
      } else {
        if (state.cartProducts[0].quantity === 1) {
          state.cartProducts.splice(0, 1);
        } else {
          state.cartProducts[0].quantity -= 1;
        }
      }
    },
    removeFullProductFromCart: (state, action) => {
      //console.log('removeFullProductFromCart');
      const findId = state.cartProducts.findIndex((prod) => prod.product_id === action.payload.product_id);
      state.cartProducts.splice(findId, 1);
    },
    addFullProductToCart: (state, action) => {
      //console.log('addFullProductToCart');
      if (state.cartProducts.length) {
        const findId = state.cartProducts.findIndex((prod) => prod.product_id === action.payload.product_id);
        if (findId >= 0) {
          state.cartProducts[findId].quantity += action.payload.quantity;
        } else {
          state.cartProducts.push(action.payload);
        }
      } else {
        state.cartProducts.push(action.payload);
      } 
    },
  },
  extraReducers: {}
})

export const { AddProductToCart, removeProductFromCart, removeFullProductFromCart, addFullProductToCart } = cartReducer.actions

export default cartReducer.reducer