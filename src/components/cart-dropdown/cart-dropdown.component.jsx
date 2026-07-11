import { useContext } from 'react';

import './cart-dropdown.styles.scss'

import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const { cart } = useContext(CartContext);
    const { products } = cart;
    console.log(products);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    products
                        .map(
                            (product) =>
                                <span key={product.id}>{product.name}</span>
                        )
                }
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    );
}

export default CartDropdown;