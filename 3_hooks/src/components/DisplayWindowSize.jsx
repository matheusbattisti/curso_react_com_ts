import React from "react";
import useWindowSize from "../hooks/useWindowSize"; // Suponha que o Hook esteja em um arquivo separado

function DisplayWindowSize() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>A largura da janela é: {width}px</p>
      <p>A altura da janela é: {height}px</p>
    </div>
  );
}

export default DisplayWindowSize;
