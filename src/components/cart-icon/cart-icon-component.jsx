import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

import "./cart-icon.styles.scss";

import ShoppingIcon from "../../assets/shopping-bag.svg";

const CartIcon = ({ ...otherProps }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container" {...otherProps}>
      <img src={ShoppingIcon} className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
