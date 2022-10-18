import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useDispatch, useSelector } from "react-redux";
import {
  CheckoutItemContainer,
  Name,
  Price,
  ImageContainer,
  Image,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, quantity, imageUrl } = cartItem;

  const addItemToCartHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemToCartHandler = () => {
    dispatch(removeItemToCart(cartItems, cartItem));
  };
  const clearItemFromCartHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="Checkout-item-Image" />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemToCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton
        className="remove-button"
        onClick={clearItemFromCartHandler}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
