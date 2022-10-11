import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
<<<<<<< HEAD
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            addItemToCart(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            removeItemToCart(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
=======
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
>>>>>>> test2
    </div>
  );
};
export default CheckoutItem;
