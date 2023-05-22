import { useState, createContext, useEffect } from "react";

const setAddToCartProduct = (cartProduct, addToCart) => {
  const isCartProduct = cartProduct.find(
    (product) => product.id === addToCart.id
  );

  if (isCartProduct) {
    return cartProduct.map((cartItem) => {
      return cartItem.id === addToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartProduct, { ...addToCart, quantity: 1 }];
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartClick, setCartClick] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  const addToCart = (addToCart) => {
    setCartProduct(setAddToCartProduct(cartProduct, addToCart));
  };

  useEffect(() => {
    const cartCountAdd = cartProduct.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartCount(cartCountAdd);
  }, [cartCount, cartProduct]);

  const value = {
    setCartClick,
    cartClick,
    cartProduct,
    addToCart,
    cartCount,
    setCartProduct,
    setTotalCart,
    totalCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
