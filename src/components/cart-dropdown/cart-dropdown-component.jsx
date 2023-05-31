import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

import { useNavigate } from "react-router-dom";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";

import CartItem from "../cart-items/cart-item.component";

import "./cart-dropdown.styles.jsx";
import {
  CartItems,
  DropdownContainer,
  EmptyItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartProduct, setCartClick } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/shop/checkout");
    setCartClick(false);
  };

  return (
    <DropdownContainer>
      <CartItems>
        {cartProduct.length ? (
          cartProduct.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyItems>Your Cart Is Empty</EmptyItems>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleCheckOut}
      >
        Go To Checkout
      </Button>
    </DropdownContainer>
  );
};

export default CartDropdown;
