import React from 'react';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.componenet';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions';
import {selectCartHidden}  from '../../redux/cart/cart.selectors'
import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser,hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop' >
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
        <CartIcon />
      {
        hidden ? null : <CartDropdown />
      }
    </OptionsContainer>
  </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden : selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

// another way 
// const mapStateToProps = (state) => ({
//   currentUser : state.user.currentUser
//})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
