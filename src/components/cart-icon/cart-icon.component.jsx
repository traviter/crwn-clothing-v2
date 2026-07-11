import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { cart, setCart } = useContext(CartContext);
    const { products, isCartOpen } = cart;

    const onIconClick = () => setCart({ ...cart, isCartOpen: !isCartOpen });

    return (
        <div className='cart-icon-container' onClick={onIconClick}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{products.length}</span>
        </div>
    )
}

export default CartIcon;