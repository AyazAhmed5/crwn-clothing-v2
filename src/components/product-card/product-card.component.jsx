import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";
import Button from "../button-component/button-component";

import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;
  const addToCartHandler = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img className="background-image" src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addToCartHandler} buttonType="inverted">
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;
