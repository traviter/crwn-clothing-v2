import { createContext, useState, useContext } from 'react'

import PRODUCTS from '../shop-data.json'

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const cartItemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const cartSubtotal = cartItems.reduce((total, cartItem) => total + cartItem.price, 0);

    const addItemToCart = (productToAdd, quantity = 1) => {
        setCartItems(addCartItem(cartItems, productToAdd, quantity));
    }

    const removeItemFromCart = (productToRemove, quantity = 999) => {
        setCartItems(addCartItem(cartItems, productToRemove, -quantity));
    }

    const value = { cartItems, setCartItems, isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItemCount, cartSubtotal }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}