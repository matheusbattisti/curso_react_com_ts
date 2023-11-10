import React, { useState, useEffect } from "react";
import Product from "./Product";
import productsData from "../data/products_mock.json";

const Catalog = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Carregando os produtos do mock JSON
    // Em um cenário real, você poderia fazer uma requisição HTTP aqui
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
