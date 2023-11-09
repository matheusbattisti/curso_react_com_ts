import React, { useState, useEffect, useMemo } from "react";

// Solução do Exercício 1: Uso de useEffect para Sincronização de Dados
const UserInfo = ({ userInfo }) => {
  useEffect(() => {
    document.title = `${userInfo.name} - ${userInfo.jobTitle}`;
  }, [userInfo]);

  return (
    <div>
      <h1>{userInfo.name}</h1>
      <p>{userInfo.jobTitle}</p>
    </div>
  );
};

// Solução do Exercício 2: Memorizando Cálculos com useMemo
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const FibCalculator = ({ num }) => {
  const fibResult = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <p>
        Fibonacci de {num} é {fibResult}
      </p>
    </div>
  );
};

// Solução do Exercício 3: Criação e Uso de um Custom Hook
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

const OnlineStatusIndicator = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>Você está atualmente: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

// Componente que engloba todas as soluções de exercícios
const Exercises = () => {
  // Mock de props para o UserInfo
  const userInfo = { name: "Alice", jobTitle: "Desenvolvedora" };

  // Estado para o FibCalculator
  const [num, setNum] = useState(10);

  return (
    <div>
      <h2>Exercício 1: UserInfo</h2>
      <UserInfo userInfo={userInfo} />

      <h2>Exercício 2: FibCalculator</h2>
      <FibCalculator num={num} />

      <h2>Exercício 3: OnlineStatusIndicator</h2>
      <OnlineStatusIndicator />
    </div>
  );
};

export default Exercises;
