import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import "./checkout-item.styles.scss";

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={removeItemToCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItemFromCartHandler}>
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutItem;
