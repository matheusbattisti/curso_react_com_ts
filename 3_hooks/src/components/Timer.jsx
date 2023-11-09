import { useEffect } from "react";
import { useState } from "react";

function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((segundos) => segundos + 1);
    }, 1000);

    // A função retornada é a limpeza do efeito
    return () => clearInterval(intervalId);
  }, []); // Array vazio significa que o efeito não depende de nenhuma prop ou estado

  return <div>Timer: {segundos} segundos.</div>;
}

export default Timer;
