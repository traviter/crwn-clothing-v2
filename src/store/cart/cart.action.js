import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils"
import { selectIsCartOpen, selectCartItems } from "./cart.selector";

export const setIsCartOpen = (isCartOpen) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
export const setCartItems = (cartItems) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addItemToCart = (cartItems, productToAdd, quantity = 1) => setCartItems(addCartItem(cartItems, productToAdd, quantity));
export const removeItemFromCart = (cartItems, productToRemove, quantity = 999) => setCartItems(addCartItem(cartItems, productToRemove, -quantity));

const addCartItem = (cartItems, productToAdd, quantity = 1) => {
    var index = cartItems.findIndex((cartItem) => cartItem.id == productToAdd.id);
    cartItems = [...cartItems]
    if (index >= 0) {
        const item = cartItems[index];
        const newQuantity = item.quantity + quantity
        if (newQuantity > 0) {
            cartItems[index] = { ...item, quantity: newQuantity }
        } else {
            cartItems.splice(index, 1);
        }
    } else {
        cartItems.push({ ...productToAdd, quantity: quantity })
    }
    return cartItems;
};