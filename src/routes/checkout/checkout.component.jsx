import { useSelector } from 'react-redux';

import './checkout.styles.scss'

import { selectCartItems, selectCartSubtotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const cartSubtotal = useSelector(selectCartSubtotal);
    const cartItems = useSelector(selectCartItems);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <div className='total'>Total: ${cartSubtotal}</div>
        </div>
    );
}

export default Checkout