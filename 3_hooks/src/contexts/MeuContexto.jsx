import React, { createContext, useState } from "react";

// Criação do Contexto
export const MeuContexto = createContext();

// Componente Provedor que encapsula seus filhos fornecendo o contexto
export const MeuContextoProvider = ({ children }) => {
  const [mensagem, setMensagem] = useState("Mensagem inicial");

  // O valor que será passado para os consumidores do contexto
  const valorDoContexto = {
    mensagem,
    setMensagem,
  };

  return (
    <MeuContexto.Provider value={valorDoContexto}>
      {children}
    </MeuContexto.Provider>
  );
};
