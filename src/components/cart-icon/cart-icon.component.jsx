import { useContext } from 'react';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { cartItemCount, isCartOpen, toggleCartOpen } = useContext(CartContext);

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;