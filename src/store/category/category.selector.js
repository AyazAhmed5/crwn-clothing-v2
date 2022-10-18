import { createSelector } from "reselect";

export const selectCategoriesReducer = (state) => state.categories;
export const selectCategoriesSlice = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategories = createSelector(
  [selectCategoriesSlice],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
