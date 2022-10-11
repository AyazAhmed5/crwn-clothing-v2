import { createContext, useState } from "react";

import SHOP_DATA from "../shop-data.js";
import Products from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products] = useState(Products);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
