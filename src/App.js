import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import {
  onAuthStateChangedListner,
  createUserDocFromAuth,
} from "./Utils/firebase-folder/firebase.utils";

import { setCurrentUser } from "./store/user/user.action";

import Home from "./Routes/home/home.component.jsx";
import Authentication from "./Routes/authentication/authentication.component.jsx";
import Navigation from "./Routes/navigation/navigation.component.jsx";
import Shop from "./components/shop-component/shop.component";
import Checkout from "./Routes/checkout/checkout.component";
import { GlobalStyle } from "./global-styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, [dispatch]);
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
