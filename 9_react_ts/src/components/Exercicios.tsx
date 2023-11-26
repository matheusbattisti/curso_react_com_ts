import React, { useState, useEffect } from "react";

// Componente que engloba todos os exercícios
const Exercicios = () => {
  // Exercício 1: Formulário de Login
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Login efetuado com sucesso!\nUsuário: ${usuario}\nSenha: ${senha}`);
    // Aqui, você normalmente enviaria os dados para um servidor
  };

  // Exercício 2: Lista de Compras
  type Item = {
    id: number;
    nome: string;
  };

  const [itens, setItens] = useState<Item[]>([]);
  const [novoItem, setNovoItem] = useState("");

  const adicionarItem = () => {
    const item: Item = {
      id: itens.length + 1,
      nome: novoItem,
    };
    setItens([...itens, item]);
    setNovoItem("");
  };

  // Exercício 3: useLocalStorage Hook
  function useLocalStorage<T>(
    key: string,
    initialValue: T
  ): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setValue = (value: T) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      setValue(storedValue);
    }, []);

    return [storedValue, setValue];
  }

  // Usando o Hook useLocalStorage
  const [nome, setNome] = useLocalStorage("nome", "");

  return (
    <div>
      {/* Exercício 1: Formulário de Login */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuário:</label>
          <input
            id="usuario"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>

      {/* Exercício 2: Lista de Compras */}
      <div>
        <input
          type="text"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
        />
        <button onClick={adicionarItem}>Adicionar</button>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))}
        </ul>
      </div>

      {/* Exercício 3: useLocalStorage Hook */}
      <div>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <p>O nome armazenado é: {nome}</p>
      </div>
    </div>
  );
};

export default Exercicios;
