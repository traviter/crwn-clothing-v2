import { createContext, useState } from 'react'

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js'

import PRODUCTS from '../shop-data.json';


export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);

    const value = { products, setProducts }
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}