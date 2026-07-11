import { useContext } from 'react'
import { CategoriesContext } from "../../contexts/categories.context";

import './shop.styles.scss'

import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const products = categoriesMap['hats'] ?? [];
    return (
        <div className='products-container'>
            {
                products
                    .map((product) => (<ProductCard key={product.id} product={product} />)
                    )
            }
        </div>
    )
}

export default Shop;