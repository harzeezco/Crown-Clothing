import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

import Button from "../button/button-component";
import "./productCard.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { addToCart } = useContext(CartContext);

  const addCartProduct = () => addToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addCartProduct}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
