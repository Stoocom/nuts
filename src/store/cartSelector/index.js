export function getCartProducts(state) {
  //console.log("getCartProducts");
  return state.cart;
};
export function getCartLength(state) {
  //console.log("getCartlength");
  return state.cart.cartProducts.length;
}