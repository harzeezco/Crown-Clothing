import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase-component.jsx";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    return async () => {
      const categoriesData = await getCategoriesAndDocuments();
      setProduct(categoriesData);
    };
  }, []);

  const value = { product };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
