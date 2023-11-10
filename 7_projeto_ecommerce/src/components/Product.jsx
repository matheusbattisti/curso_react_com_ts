import React, { useState } from "react";

const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="cart-buttons">
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;
