import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategories } from "../../store/category/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  // console.log("categoryPreview", categoriesMap);
  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};
export default CategoriesPreview;
