import React, { useState, useMemo } from "react";

const CalculoPesado = ({ numero }) => {
  const resultadoCalculoPesado = useMemo(() => {
    return operacaoPesada(numero);
  }, [numero]);

  return <div>Resultado: {resultadoCalculoPesado}</div>;
};

// Suponha que esta é uma operação de CPU pesada
const operacaoPesada = (num) => {
  console.log("Realizando operação pesada...");
  return num * 1000; // Exemplo simplificado de uma operação pesada
};

export default CalculoPesado;
