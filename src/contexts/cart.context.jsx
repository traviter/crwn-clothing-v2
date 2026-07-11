import { createContext, useState, useContext } from 'react'

import PRODUCTS from '../shop-data.json'

const addCartItem = (cartItems, productToAdd, quantity = 1) => {
    var index = cartItems.findIndex((cartItem) => cartItem.id == productToAdd.id);
    cartItems = [...cartItems]
    if (index >= 0) {
        const item = cartItems[index];
        cartItems[index] = { ...item, quantity: item.quantity + quantity }
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

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { cartItems, setCartItems, isCartOpen, setIsCartOpen, addItemToCart }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}