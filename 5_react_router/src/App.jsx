import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import TaskDetails from "./components/TaskDetails";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      {/* 12.1 Setup e configuração inicial */}
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          {/* 12.2 NavLink */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contato
            </NavLink>
          </li>
          {/* 12.3 useNavigate */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* 12.5 Rotas aninhadas */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* 12.4 Roteamento dinâmico */}
      <div>
        <h2>Tarefas</h2>
        <Link to={`/tasks/1`}>Tarefa 1</Link>
        <Link to={`/tasks/2`}>Tarefa 2</Link>
        <Link to={`/tasks/3`}>Tarefa 3</Link>
      </div>

      {/* 12.6 404 */}
      <div>
        <h2>Itens</h2>
        <Link to={`/items/1`}>Item 1</Link>
        <Link to={`/items/2`}>Item 2</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 12.3 useNavigate */}
        <Route path="/login" element={<Login />} />
        {/* 12.4 Roteamento dinâmico */}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        {/* 12.5 Rotas aninhadas */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          {/* Rotas aninhadas para o Dashboard */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* 12.6 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
