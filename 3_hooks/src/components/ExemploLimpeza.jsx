import React, { useState, useEffect } from "react";

function ExemploLimpeza() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setOnline(navigator.onLine);
    };

    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    // A função de limpeza remove os listeners quando o componente é desmontado
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []); // Array vazio indica que este efeito só roda na montagem e desmontagem

  return <div>Status: {online ? "Online" : "Offline"}</div>;
}

export default ExemploLimpeza;
