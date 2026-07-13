import { createContext, useState, useContext, useReducer } from 'react'

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

const getUpdatedCartItemState = (cartItems) => ({
    cartItems: cartItems,
    cartItemCount: cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
    cartSubtotal: cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
})

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemCount: 0,
    cartSubtotal: 0
}

export const CartContext = createContext(INITIAL_STATE);



const CART_ACTION_TYPES = {
    'SET_IS_CART_OPEN': 'SET_IS_CART_OPEN',
    'SET_CART_ITEM_STATE': 'SET_CART_ITEM_STATE'
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEM_STATE:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {
    const [{ isCartOpen, cartItems, cartItemCount, cartSubtotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const dispatchAction = (type, payload) => dispatch({ type, payload })
    const toggleCartOpen = () => {
        dispatchAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen)
    }

    const addItemToCart = (productToAdd, quantity = 1) => {
        const updatedCartItems = addCartItem(cartItems, productToAdd, quantity);
        const updatedState = getUpdatedCartItemState(updatedCartItems);
        dispatchAction(CART_ACTION_TYPES.SET_CART_ITEM_STATE, updatedState)
    }

    const removeItemFromCart = (productToRemove, quantity = 999) => {
        const updatedCartItems = addCartItem(cartItems, productToRemove, -quantity);
        const updatedState = getUpdatedCartItemState(updatedCartItems);
        dispatchAction(CART_ACTION_TYPES.SET_CART_ITEM_STATE, updatedState)
    }

    const value = { cartItems, isCartOpen, toggleCartOpen, addItemToCart, removeItemFromCart, cartItemCount, cartSubtotal }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}