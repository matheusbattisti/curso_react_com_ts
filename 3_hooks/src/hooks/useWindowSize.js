import { useState, useEffect } from "react";

// Custom Hook que retorna o tamanho atual da janela do navegador
export default function useWindowSize() {
  // Inicializa o estado com as dimensões atuais da janela
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler para chamar sempre que a janela for redimensionada
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adiciona o listener para o evento de resize
    window.addEventListener("resize", handleResize);

    // Chama o handler imediatamente para atualizar o estado com as dimensões iniciais
    handleResize();

    // Remove o listener quando o componente for desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array vazio garante que o efeito só é executado na montagem e desmontagem

  return windowSize;
}
