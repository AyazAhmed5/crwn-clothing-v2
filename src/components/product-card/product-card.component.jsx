import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Button, {
  Button_Type_Class,
} from "../button-component/button-component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={Button_Type_Class.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
