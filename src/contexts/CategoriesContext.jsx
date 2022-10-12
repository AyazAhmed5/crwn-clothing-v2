import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data.js";
import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../Utils/firebase-folder/firebase.utils.jsx";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setcategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
