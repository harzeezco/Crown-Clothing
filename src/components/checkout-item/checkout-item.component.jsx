import { CartContext } from "../contexts/cart-context";
import "./checkout-item.styles.scss";

import { useContext, useEffect } from "react";

const CheckoutItem = ({ cartCheckout }) => {
  const { setTotalCart, cartProduct, setCartProduct, addToCart } =
    useContext(CartContext);

  const { imageUrl, name, quantity, price, id } = cartCheckout;

  // const handleIncreaseBtn = () => {
  //   const newPro = cartProduct.map((product) => {
  //     return product.id === id
  //       ? { ...product, quantity: quantity + 1 }
  //       : product;
  //   });

  //   setCartProduct(newPro);
  // };

  useEffect(() => {
    const total = cartProduct.reduce(
      (sum, product) => sum + product.quantity * product.price,
      0
    );
    setTotalCart(total);
  }, [cartProduct, setTotalCart]);

  const handleDecreaseBtn = () => {
    const newPro = cartProduct.map((product) => {
      return product.id === id
        ? { ...product, quantity: quantity - 1 }
        : product;
    });

    setCartProduct(newPro);

    if (quantity === 1) {
      setCartProduct(cartProduct.filter((product) => product.id !== id));
    }
  };

  const handleDeleteBtn = () => {
    setCartProduct(cartProduct.filter((product) => product.id !== id));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name} image`} />
      </div>

      <span className="name">{name}</span>

      <div className="quantity">
        <span className="arrow" onClick={handleDecreaseBtn}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>

        <span className="arrow" onClick={() => addToCart(cartCheckout)}>
          &#10095;
        </span>
      </div>

      <span className="price">{quantity * price}</span>
      <div className="remove-button" onClick={handleDeleteBtn}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
