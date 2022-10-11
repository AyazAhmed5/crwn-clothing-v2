import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
<<<<<<< HEAD
  const { name, price, quantity, imageUrl } = item;
=======
  const { name, price, imageUrl, quantity } = item;
>>>>>>> test2
  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
