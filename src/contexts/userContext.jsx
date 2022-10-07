import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangedListner,
  createUserDocFromAuth,
} from "../Utils/firebase-folder/firebase.utils";

//Actual value we want
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
