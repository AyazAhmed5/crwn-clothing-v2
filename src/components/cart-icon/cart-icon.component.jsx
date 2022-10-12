import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/111 shopping-bag.svg";

import { CartContext } from "../../contexts/cartContext";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIconStyle,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyle>
        <ShoppingIcon className="shopping-icon" />
      </ShoppingIconStyle>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
