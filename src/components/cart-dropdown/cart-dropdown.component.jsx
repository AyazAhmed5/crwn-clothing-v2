import Button from "../button-component/button-component";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectIsCarOpen,
} from "../../store/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCarOpen);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
