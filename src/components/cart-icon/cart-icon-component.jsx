import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

import "./cart-icon.styles.jsx";

import ShoppingIcon from "../../assets/shopping-bag.svg";
import { ItemCount, ShopIcon, CartIconContainer } from "./cart-icon.styles.jsx";

const CartIcon = ({ ...otherProps }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <CartIconContainer {...otherProps}>
      <ShopIcon src={ShoppingIcon} className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
