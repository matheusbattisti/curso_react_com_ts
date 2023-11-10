import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";
import PostsManager from "./components/PostManager";
import PostLoader from "./components/PostLoader";
import PostViewer from "./components/PostViewer";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        {/* 15.1 GET com Axios e Fetch */}
        <h1>GET com Axios e Fetch</h1>
        <div>
          <Link to="/fetch-posts">Fetch Posts</Link>
        </div>
        <div>
          <Link to="/axios-posts">Axios Posts</Link>
        </div>
        {/* 15.2 POST, PUT e DELETE */}
        <div>
          <Link to="/posts">Gerenciar Postagens</Link>
        </div>
        {/* 15.3 Tratando erros */}
        <div>
          <Link to="/post/1">Carregar Post</Link>
        </div>
        <div>
          <Link to="/post/999">Carregar Post 999</Link>
        </div>
        {/* 15.4 Hook para requisições */}
        <div>
          <Link to="/post/2">Carregar Post com Hook</Link>
        </div>
      </nav>
      <Routes>
        {/* 15.1 GET com Axios e Fetch */}
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />
        {/* 15.2 POST, PUT e DELETE */}
        <Route path="/posts" element={<PostsManager />} />
        {/* 15.3 Tratando erros */}
        <Route path="/post/:postId" element={<PostLoader />} />
        {/* 15.4 Hook para requisições */}
        <Route path="/posts/:postId" element={<PostViewer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
