import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPostsAxios = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        setError("Erro ao buscar os posts: " + error.message);
      }
    };

    fetchPostsAxios();
  }, []);

  return (
    <div>
      <h1>Posts (Axios)</h1>
      {error ? (
        <p>Erro: {error}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AxiosPosts;
