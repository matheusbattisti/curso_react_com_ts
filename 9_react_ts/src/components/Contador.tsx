import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

const Contador: React.FC = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </div>
  );
};

export default Contador;
