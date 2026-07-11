import { useContext } from 'react';

import './checkout.styles.scss'

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartSubtotal, cartItems } = useContext(CartContext);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
                </tbody>
            </table>
            <div>${cartSubtotal}</div>
        </div>
    );
}

export default Checkout