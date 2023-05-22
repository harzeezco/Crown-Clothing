import { useContext } from "react";

import "./shop-component.styles.scss";

import { ProductContext } from "../../components/contexts/product-context";
import ProductCard from "../../components/productCard/productCard-component";

const Shop = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className="product--container">
      {product.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
