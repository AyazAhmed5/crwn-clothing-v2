import { CartContext } from "../../contexts/cartContext";

import "./checkout.styles.scss";
import { useContext } from "react";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  return (
    <div>
      <h1> Checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span
                onClick={() => {
                  removeItemToCart(cartItem);
                }}
              >
                decrement
              </span>
              <br />
              <span
                onClick={() => {
                  addItemToCart(cartItem);
                }}
              >
                increment
              </span>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Checkout;
