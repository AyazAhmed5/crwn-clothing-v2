import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";

import Button from "../button-component/button-component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { setIsCartOpen, cartItems, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button onClick={navigateToCheckout}>Go to Checkout</Button>
    </div>
  );
};
export default CartDropdown;
