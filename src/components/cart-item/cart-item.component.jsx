import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="">
      <img src={imageUrl} />
      <h3>{name}</h3>
      <span>{price}</span>
    </div>
  );
};
export default CartItem;
git;
