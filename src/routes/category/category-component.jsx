import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./category.styles.scss";

import { useContext } from "react";

import { ProductContext } from "../../components/contexts/product-context";
import ProductCard from "../../components/productCard/productCard-component";

const Category = () => {
  const { category } = useParams();
  const { product } = useContext(ProductContext);
  const [products, setProducts] = useState(product[category]);

  useEffect(() => {
    setProducts(product[category]);
  }, [category, product]);

  return (
    <>
      <h1 className="category-title">{category.toUpperCase()}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
