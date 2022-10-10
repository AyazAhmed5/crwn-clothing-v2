import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";

import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../Utils/firebase-folder/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              Sign-in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
