import { useContext } from "react";

import { ProductContext } from "../../components/contexts/product-context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { product } = useContext(ProductContext);

  return (
    <>
      {Object.keys(product).map((title) => {
        const products = product[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
