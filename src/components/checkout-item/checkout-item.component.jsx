import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

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
  const { name, price, quantity, imageUrl } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemToCartHandler = () => {
    removeItemToCart(cartItem);
  };
  const clearItemFromCartHandler = () => {
    clearItemFromCart(cartItem);
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
