import React from "react";

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
      <div className="cart-buttons">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
          min="1"
        />
        <button onClick={() => onRemoveFromCart(item)}>Remover</button>
      </div>
    </div>
  );
};

export default CartItem;
