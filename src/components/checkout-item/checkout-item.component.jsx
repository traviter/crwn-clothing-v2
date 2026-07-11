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
        <tr>
            <tr>
                <td><img src={imageUrl} /></td>
                <td>{name}</td>
                <td><a onClick={decreaseCartItem}>{'<'}</a>{quantity}<a onClick={increaseCartItem}>{'>'}</a></td>
                <td>${price}</td>
                <td><a onClick={removeCartItem}>X</a></td>
            </tr>
        </tr>
    );
}

export default CheckoutItem;