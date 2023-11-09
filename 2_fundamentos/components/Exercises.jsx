import React, { useState } from "react";

// Exercício 1: Componente de Saudação
const Greeting = ({ name }) => {
  return <h1>Olá, {name}!</h1>;
};

// Exercício 2: Componente Contador
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Você clicou {count} vezes no botão.</p>
      <button onClick={() => setCount(count + 1)}>Clique em mim</button>
    </div>
  );
};

// Exercício 3: Lista de Tarefas
const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>Não há tarefas a mostrar.</p>;
  }
  return (
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ol>
  );
};

// Componente Exercises que agrupa todos os exercícios
const Exercises = () => {
  // Dados de exemplo para o componente TaskList
  const tasks = [
    { id: 1, text: "Comprar leite" },
    { id: 2, text: "Estudar React" },
  ];

  return (
    <div>
      <h2>Exercício 1: Saudação</h2>
      <Greeting name="João" />

      <h2>Exercício 2: Contador</h2>
      <Counter />

      <h2>Exercício 3: Lista de Tarefas</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Exercises;
