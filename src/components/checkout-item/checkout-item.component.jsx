import { useContext } from 'react'

import './checkout-item.styles.scss'

import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ cartItem }) => {
    console.log(cartItem)
    const { imageUrl, name, quantity, price } = cartItem
    const { removeItemFromCart, addItemToCart } = useContext(CartContext);

    const removeCartItem = () => removeItemFromCart(cartItem);
    const decreaseCartItem = () => addItemToCart(cartItem, -1);
    const increaseCartItem = () => addItemToCart(cartItem, 1);

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