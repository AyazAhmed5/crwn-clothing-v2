import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/111 shopping-bag.svg";
import {
  selectCartCount,
  selectIsCarOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIconStyle,
} from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCarOpen);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
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
