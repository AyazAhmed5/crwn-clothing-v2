import { createContext, useEffect, useReducer, useState } from "react";
import {
  onAuthStateChangedListner,
  createUserDocFromAuth,
} from "../Utils/firebase-folder/firebase.utils";

//Actual value we want
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
const userReducer = (state, action) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error("Something went Wrong");
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
