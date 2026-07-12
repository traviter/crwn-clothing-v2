import { useContext } from 'react';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { cartItemCount, isCartOpen, setIsCartOpen } = useContext(CartContext);

    const onIconClick = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={onIconClick}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;