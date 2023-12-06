// Instalação
// npm install axios
// npm install @types/axios --save-dev

import { useEffect, useState } from "react";
import axios from "axios";

// Definição do tipo para uma postagem
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Componente funcional para exibir postagens
const ExibirPostagens = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarPostagens = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data.slice(0, 5));
      } catch (error) {
        console.error("Erro ao buscar postagens:", error);
      } finally {
        setCarregando(false);
      }
    };

    buscarPostagens();
  }, []);

  return (
    <div>
      <h2>Lista de posts:</h2>
      {carregando ? (
        <p>Carregando postagens...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExibirPostagens;
