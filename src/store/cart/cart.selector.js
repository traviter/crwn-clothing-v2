import { createSelector } from "reselect";

export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectCartItems = (state) => state.cart.cartItems;



const calculateCartItemCount = (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
export const selectCartItemCount = createSelector([selectCartItems], calculateCartItemCount);
const calculateCartSubtotal = (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
export const selectCartSubtotal = createSelector([selectCartItems], calculateCartSubtotal);

