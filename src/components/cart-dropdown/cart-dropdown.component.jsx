import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        cartItems
                            .map(
                                (cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />
                            ) :
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                }
                <Link to='/checkout'>
                    <Button>GO TO CHECKOUT</Button>
                </Link>
            </CartItems>
        </CartDropdownContainer>
    );
}

export default CartDropdown;