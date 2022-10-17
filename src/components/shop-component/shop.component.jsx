import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getCategoriesAndDocuments } from "../../Utils/firebase-folder/firebase.utils";
import { setCategories } from "../../store/category/cateogry.action.js";

import CategoriesPreview from "../../Routes/categories-preview/categories-preview.component";
import Category from "../../Routes/category/category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
