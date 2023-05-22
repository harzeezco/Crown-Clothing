import { createContext, useState } from "react";
import PropTypes from "prop-types";

import Shop_Data from "../../shop-data.json";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(Shop_Data);

  const value = { product };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
