import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item }) => {
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`/items/${item.id}`, { state: { item } });
  };

  return (
    <div>
      <h3>{item.title}</h3>
      <button onClick={showDetails}>Ver Detalhes</button>
    </div>
  );
};

export default ListItem;
