import "./product-card.styles.scss";

import { CartContext } from "../../contexts/cartContext";
import Button from "../button-component/button-component";

const ProductCard = (props) => {
  const { name, price, imageUrl } = props.products;

  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};
export default ProductCard;
