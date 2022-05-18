import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from 'reselect'
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  // const cartItemslength = useSelector(({ cart: { cartItems } }) =>
  //   cartItems.length
  //     ? cartItems.reduce(
  //         (accumulatedQuantity, cartItem) =>
  //           accumulatedQuantity + cartItem.quantity,
  //         0
  //       )
  //     : 0
  // );

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapSateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapSateToProps, mapDispatchToProps)(CartIcon);
