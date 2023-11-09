import React, { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContexto"; // Importar o provedor de contexto

// Componente que consome o contexto
const ComponenteFilho = () => {
  // Acessar o contexto
  const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={() => setMensagem("Nova mensagem")}>
        Atualizar Mensagem
      </button>
    </div>
  );
};

export default ComponenteFilho;
