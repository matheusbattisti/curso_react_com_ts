import { useState } from "react";

function Counter() {
  // Inicializa `count` com 0 usando `useState`
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} Vezes</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
}

export default Counter;
