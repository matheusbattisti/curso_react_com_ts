import React, { useState, useEffect } from "react";

// Componente que recebe prop `usuarioId` e sincroniza um estado interno `usuario` com ele
const PerfilDeUsuario = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Função para buscar dados do usuário
    const buscarUsuario = async () => {
      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`
      );
      const dadosDoUsuario = await resposta.json();
      setUsuario(dadosDoUsuario);
    };

    if (usuarioId) {
      buscarUsuario();
    }
  }, [usuarioId]); // Este `useEffect` roda toda vez que `usuarioId` mudar

  // Renderiza o componente com os dados do usuário ou uma mensagem de carregamento
  return (
    <div>
      {usuario ? (
        <div>
          <h1>{usuario.name}</h1>
          <p>{usuario.email}</p>
          {/* outros dados do usuário */}
        </div>
      ) : (
        <p>Carregando perfil do usuário...</p>
      )}
    </div>
  );
};

export default PerfilDeUsuario;
