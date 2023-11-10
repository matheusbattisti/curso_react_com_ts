import React from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  let { taskId } = useParams();

  // Aqui você faria uma busca para obter os detalhes da tarefa usando o `taskId`,
  // mas para este exemplo, vamos simplesmente exibir o ID da tarefa.
  return (
    <div>
      <h2>Detalhes da Tarefa</h2>
      <p>ID da Tarefa: {taskId}</p>
    </div>
  );
};

export default TaskDetails;
