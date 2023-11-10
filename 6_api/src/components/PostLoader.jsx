import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostLoader = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { postId } = useParams(); // Aqui nós pegamos o postId da URL

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      try {
        if (postId == "999") {
          setPost(null);
          throw new Error("Não existe!");
        }

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(response.data);
        setSuccessMessage("Post carregado com sucesso!");
      } catch (err) {
        setError("Falha ao carregar o post: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  return (
    <div>
      <h1>Post</h1>
      {loading && <p>Carregando...</p>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostLoader;
