import { createContext, useState } from "react";

<<<<<<< HEAD
import SHOP_DATA from "../shop-data";
=======
import SHOP_DATA from "../shop-data.js";
>>>>>>> test2

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
<<<<<<< HEAD
  const [products] = useState([]);
=======
  const [products] = useState(SHOP_DATA);
>>>>>>> test2
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
