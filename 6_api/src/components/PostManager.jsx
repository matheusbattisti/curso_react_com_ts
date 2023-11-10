import React, { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostsManager = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data.slice(0, 5)); // Limitando a 5 posts para o exemplo
    } catch (error) {
      console.error("Erro ao buscar postagens:", error);
    }
  };

  const handleSuccess = (post, operation) => {
    if (operation === "add") {
      setPosts((currentPosts) => [post, ...currentPosts]);
    } else if (operation === "update") {
      setPosts((currentPosts) =>
        currentPosts.map((p) => (p.id === post.id ? post : p))
      );
    } else if (operation === "delete") {
      setPosts((currentPosts) => currentPosts.filter((p) => p.id !== post.id));
      setSelectedPost(null); // Reset selected post
      setIsEditing(false); // Exit editing mode
    }
  };

  const handleEdit = (post) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedPost(null);
  };

  return (
    <div>
      <h1>Gerenciador de Postagens</h1>
      <PostForm
        post={isEditing ? selectedPost : null}
        onSuccess={handleSuccess}
      />
      {isEditing && <button onClick={handleCancelEdit}>Cancelar Edição</button>}
      <h2>Postagens</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleEdit(post)}>Editar</button>
        </div>
      ))}
    </div>
  );
};

export default PostsManager;
