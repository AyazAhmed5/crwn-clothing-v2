import { CATEGORY_ACTION_TYPES } from "./category.types";
import { CreateAction } from "../../Utils/reducer/reducer.utils";

export const setCategories = (categoriesArray) =>
  CreateAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
