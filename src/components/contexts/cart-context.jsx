import { createContext, useEffect, useReducer } from "react";

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

const setRemoveFromCartProduct = (cartProduct, cartToRemove) => {
  const isCartProduct = cartProduct.find(
    (product) => product.id === cartToRemove.id
  );

  if (isCartProduct.quantity === 1) {
    return cartProduct.filter((product) => product.id !== cartToRemove.id);
  }

  if (isCartProduct) {
    return cartProduct.map((cartItem) => {
      return cartItem.id === cartToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }

  return [...cartProduct, { ...cartToRemove, quantity: 1 }];
};

const handleDecreaseCart = (cartProduct, cartToRemove) => {
  return cartProduct.filter((product) => product.id !== cartToRemove.id);
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CART_DROPDOWN_OPEN":
      return {
        ...state,
        cartClick: payload,
      };
    case "TOGGLE_CART_DROPDOWN":
      return {
        ...state,
        cartClick: payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartProduct: payload,
      };
    case "REMOVE_TO_CART":
      return {
        ...state,
        cartProduct: payload,
      };
    case "ADD_TO_CART_COUNT":
      return {
        ...state,
        cartCount: payload,
      };
    case "TOTAL_CART_ITEMS":
      return {
        ...state,
        totalCart: payload,
      };
    case "DECREASE_CART_ITEMS":
      return {
        ...state,
        cartProduct: payload,
      };
    case "FILTER_CART":
      return {
        ...state,
        cartProduct: payload,
      };
    case "DELETE_CART":
      return {
        ...state,
        cartProduct: payload,
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

const INITIAL_STATE = {
  cartClick: false,
  cartProduct: [],
  cartCount: 0,
  totalCart: 0,
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartClick, cartProduct, cartCount, totalCart } = state;

  const addToCart = (addToCart) => {
    const setCartProduct = setAddToCartProduct(cartProduct, addToCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: setCartProduct,
    });
  };

  const removeFromCart = (cartToRemove) => {
    const setCartProduct = setRemoveFromCartProduct(cartProduct, cartToRemove);
    console.log(setCartProduct);
    dispatch({
      type: "REMOVE_TO_CART",
      payload: setCartProduct,
    });
  };

  useEffect(() => {
    const total = cartProduct.reduce(
      (sum, product) => sum + product.quantity * product.price,
      0
    );
    dispatch({ type: "TOTAL_CART_ITEMS", payload: total });
  }, [cartProduct, dispatch]);

  useEffect(() => {
    const cartCountAdd = cartProduct.reduce(
      (total, item) => total + item.quantity,
      0
    );

    dispatch({ type: "ADD_TO_CART_COUNT", payload: cartCountAdd });
  }, [cartCount, cartProduct]);

  const handleRemoveCart = (cartToRemove) => {
    const removeCart = handleDecreaseCart(cartProduct, cartToRemove);
    dispatch({ type: "DELETE_CART", payload: removeCart });
  };

  const value = {
    cartClick,
    cartProduct,
    addToCart,
    cartCount,
    handleDecreaseCart,
    removeFromCart,
    totalCart,
    dispatch,
    handleRemoveCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
