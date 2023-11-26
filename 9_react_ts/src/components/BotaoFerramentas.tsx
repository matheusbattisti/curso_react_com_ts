import React, { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

const BarraFerramentas = () => {
  const contextoTema = useContext(TemaContext);

  if (!contextoTema) {
    throw new Error("BarraFerramentas deve estar dentro do TemaProvider");
  }

  return (
    <div
      style={{
        background: contextoTema.tema === "claro" ? "white" : "black",
        color: contextoTema.tema === "claro" ? "black" : "white",
      }}
    >
      <button onClick={contextoTema.alternarTema}>Alternar Tema</button>
    </div>
  );
};

export default BarraFerramentas;
