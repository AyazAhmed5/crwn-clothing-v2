import { useContext } from "react";

import { ProductContext } from "../../contexts/productContext";

import ProductCard from "../../components/product-card/product-card.component.jsx";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </div>
  );
};
export default Shop;