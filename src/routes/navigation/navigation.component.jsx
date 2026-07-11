import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { UserContext } from '../../contexts/user.context'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='nav-link' to='/'>
                    <CrownLogo className='logo-container' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutHandler}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className='nav-link' to='/sign-in'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                <CartDropdown />
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;