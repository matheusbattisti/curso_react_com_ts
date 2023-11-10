import React from "react";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/useHttp";

const PostViewer = () => {
  const { postId } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useHttp(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    "GET",
    null,
    [postId]
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      {post ? (
        <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ) : (
        <p>Post não encontrado.</p>
      )}
    </div>
  );
};

export default PostViewer;
