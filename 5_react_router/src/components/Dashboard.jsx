import React from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="profile">Perfil</NavLink>
          </li>
          <li>
            <NavLink to="settings">Configurações</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {/* O Outlet renderiza os componentes das rotas aninhadas */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
