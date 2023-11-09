import React, { useState, useCallback } from "react";

// Componente botão que só renderiza novamente se sua prop 'onClick' mudar
const Botao = React.memo(({ onClick, children }) => {
  console.log("Botão renderizado:", children);
  return <button onClick={onClick}>{children}</button>;
});

// Componente contador que usa useCallback para passar uma função de incremento ao botão
const ContadorCallback = () => {
  const [contador, setContador] = useState(0);

  // A função 'incrementar' é memorizada com useCallback
  // Ela só será recriada se 'contador' mudar
  const incrementar = useCallback(() => {
    setContador((contadorAnterior) => contadorAnterior + 1);
  }, []);

  return (
    <div>
      <p>Contagem: {contador}</p>
      {/* Botao é um componente memoizado que só atualiza se 'incrementar' mudar */}
      <Botao onClick={incrementar}>Incrementar</Botao>
    </div>
  );
};

export default ContadorCallback;
