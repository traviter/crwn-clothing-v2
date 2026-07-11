import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './cart-dropdown.styles.scss'

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems
                        .map(
                            (cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />
                        )
                }
                <Link to='/checkout'>
                    <Button>GO TO CHECKOUT</Button>
                </Link>
            </div>
        </div>
    );
}

export default CartDropdown;