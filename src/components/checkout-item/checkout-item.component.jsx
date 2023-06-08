import { CartContext } from "../contexts/cart-context";
import "./checkout-item.styles.scss";

import { useContext } from "react";

const CheckoutItem = ({ cartCheckout }) => {
  const { addToCart, handleRemoveCart, removeFromCart } =
    useContext(CartContext);

  const { imageUrl, name, quantity, price, id } = cartCheckout;

  // const onCartDecreaseHandler = () => handleDecreaseCart(id, quantity);
  const onCartRemoveHandler = () => handleRemoveCart(cartCheckout);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name} image`} />
      </div>

      <span className="name">{name}</span>

      <div className="quantity">
        <span className="arrow" onClick={() => removeFromCart(cartCheckout)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>

        <span className="arrow" onClick={() => addToCart(cartCheckout)}>
          &#10095;
        </span>
      </div>

      <span className="price">{quantity * price}</span>
      <div className="remove-button" onClick={onCartRemoveHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
