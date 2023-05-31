import { useContext, useState, useEffect } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

import { CartContext } from "../../components/contexts/cart-context";

const Checkout = () => {
  const { cartProduct, totalCart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartProduct.map((cart) => (
        <CheckoutItem key={cart.id} cartCheckout={cart} />
      ))}

      <span className="total">
        {cartProduct.length === 0 ? "Total: $0 " : `Total: $${totalCart}`}
      </span>
    </div>
  );
};

export default Checkout;
