import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Aqui você faria a autenticação
    // Para este exemplo, vamos assumir que o login foi bem-sucedido
    console.log(`Usuário ${username} logou com sucesso!`);

    // Redireciona para a página inicial após o login
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
