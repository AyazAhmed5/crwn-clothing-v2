import { createContext, useEffect, useReducer } from "react";

import { CreateAction } from "../Utils/reducer/reducer.utils";
import {
  onAuthStateChangedListner,
  createUserDocFromAuth,
} from "../Utils/firebase-folder/firebase.utils";

//Actual value we want
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "SET_CURRENT_USER":
//       return {
//         ...state,
//         currentUser: payload,
//       };

//     default:
//       throw new Error("Something went Wrong");
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   // const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   // const setCurrentUser = (user) => {
//   //   dispatch(CreateAction("SET_CURRENT_USER", user));
//   // };

//   useEffect(() => {
//     const unSubscribe = onAuthStateChangedListner((user) => {
//       if (user) {
//         createUserDocFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unSubscribe;
//   }, []);

//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
