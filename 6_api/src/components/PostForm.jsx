import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ post, onSuccess }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");


  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, [post]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = { title, body, userId: 1 }; // userId fixo para exemplo

    try {
      if (post) {
        // Atualizar postagem existente
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          newPost
        );
        onSuccess(response.data, "update");
      } else {
        // Adicionar nova postagem
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          newPost
        );
        onSuccess(response.data, "add");
      }
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Erro ao enviar postagem:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`
      );
      onSuccess(post, "delete");
    } catch (error) {
      console.error("Erro ao deletar postagem:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          required
        />
      </div>
      <div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Conteúdo"
          required
        />
      </div>
      <button type="submit">{post ? "Atualizar" : "Adicionar"}</button>
      {post && (
        <button type="button" onClick={handleDelete}>
          Deletar
        </button>
      )}
    </form>
  );
};

export default PostForm;
