import { createContext, useState } from 'react'

import PRODUCTS from '../shop-data.json'

export const CartContext = createContext({
    products: PRODUCTS,
    isCartOpen: false
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ products: PRODUCTS });
    const value = { cart, setCart }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}