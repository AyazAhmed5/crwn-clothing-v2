import { USER_ACTION_TYPES } from "./user.types";
import { CreateAction } from "../../Utils/reducer/reducer.utils.jsx";

export const setCurrentUser = (user) =>
  CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
