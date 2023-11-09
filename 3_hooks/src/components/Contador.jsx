import React, { useReducer } from "react";

// Definição inicial do estado
const estadoInicial = { contador: 0 };

// Função reducer que define como as ações atualizam o estado
function reducer(estado, acao) {
  switch (acao.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };
    case "decrementar":
      return { contador: estado.contador - 1 };
    case "resetar":
      return { contador: 0 };
    default:
      throw new Error("Ação não suportada");
  }
}

// Componente que usa useReducer para gerenciar o estado
function Contador() {
  // Inicializa o useReducer com a função reducer e o estado inicial
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <>
      Contagem: {estado.contador}
      <button onClick={() => dispatch({ tipo: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ tipo: "resetar" })}>Resetar</button>
    </>
  );
}

export default Contador;
