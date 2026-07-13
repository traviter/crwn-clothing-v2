import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'


import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { CartContext } from '../../contexts/cart.context'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { setCurrentUser } from '../../store/user/user.action'
import { selectCurrentUser } from '../../store/user/user.selector'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink className='nav-link' to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>
                                SIGN OUT
                            </NavLink>
                        ) : (
                            <NavLink to='/sign-in'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;