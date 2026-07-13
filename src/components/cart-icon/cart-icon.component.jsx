import { useSelector, useDispatch } from 'react-redux';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

import { selectIsCartOpen, selectCartItemCount } from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItemCount = useSelector(selectCartItemCount);
    const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;