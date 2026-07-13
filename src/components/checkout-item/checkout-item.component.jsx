import { useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import './checkout-item.styles.scss'

import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action'

import { selectCartItems } from '../../store/cart/cart.selector'

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const removeCartItem = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const decreaseCartItem = () => dispatch(addItemToCart(cartItems, cartItem, -1));
    const increaseCartItem = () => dispatch(addItemToCart(cartItems, cartItem, 1));

    return (
        <div className='checkout-item-container'>
            <div className='image-container'><img src={imageUrl} /></div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={decreaseCartItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={increaseCartItem}>&#10095;</div></div>
            <div className='price'>${price}</div>
            <div className='remove-button'><a onClick={removeCartItem}>&#10005;</a></div>
        </div>
    );
}

export default CheckoutItem;