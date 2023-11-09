import React, { useContext } from "react";
import { MeuContexto } from "/src/contexts/MeuContexto"; // Ajuste o caminho do import conforme a localização do seu arquivo de contexto

const ValorDoContexto = () => {
  // Usar useContext para acessar o valor atual do contexto MeuContexto
  const { mensagem } = useContext(MeuContexto);

  return <div>O valor do contexto é: {mensagem}</div>;
};

export default ValorDoContexto;
