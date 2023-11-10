import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFound;
