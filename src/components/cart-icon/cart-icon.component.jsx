import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

    const onIconClick = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={onIconClick}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{Math.sumPrecise(cartItems.map((cartItem) => cartItem.quantity))}</span>
        </div>
    )
}

export default CartIcon;