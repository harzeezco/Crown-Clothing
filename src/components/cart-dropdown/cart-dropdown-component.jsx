import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

import { useNavigate } from "react-router-dom";

import Button from "../button/button-component";

import CartItem from "../cart-items/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartProduct, setCartClick } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/shop/checkout");
    setCartClick(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProduct.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <CartItem cartItem={cartItem} />
            </div>
          );
        })}
      </div>
      <Button buttonType="button" onClick={handleCheckOut}>
        Go To Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
