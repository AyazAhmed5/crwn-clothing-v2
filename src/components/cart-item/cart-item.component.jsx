import {
  CartItemContainer,
  ItemDetails,
  Image,
  Name,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <CartItemContainer>
      <Image src={imageUrl} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
