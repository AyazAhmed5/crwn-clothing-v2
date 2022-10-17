import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import { useSelector } from "react-redux";

import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../Utils/firebase-folder/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  NavigationContainer,
  LogoLink,
  NavLinkContainer,
  Links,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoLink to={"/"}>
          <CrwnLogo className="logo" />
        </LogoLink>
        <NavLinkContainer>
          <Links to={"/shop"}>Shop</Links>
          {currentUser ? (
            <Links onClick={signOutUser}>Sign Out</Links>
          ) : (
            <Links to={"/auth"}>Sign-in</Links>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
