import Button from "../button-component/button-component";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
