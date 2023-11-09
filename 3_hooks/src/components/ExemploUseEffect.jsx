import React, { useState, useEffect } from "react";

function ExemploUseEffect() {
  const [contador, setContador] = useState(0);

  // O useEffect será executado após cada renderização completada
  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;
  });

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

export default ExemploUseEffect;
