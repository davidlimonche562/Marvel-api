// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './tailwind.css';
import Personajes from './view/Personajes';
import Login from './view/Login';
import Registro from './view/Registro';
import DetallePersonaje from './view/DetallePersonajes';
import PersonajesFavoritos from './view/PersonajesFavoritos'; // Importa la vista de favoritos
import { FavoritosProvider } from './Componentes/FavoritosContext'; // Importa el proveedor de favoritos

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritosProvider>
      <Router>
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex space-x-4">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/personajes">Personajes</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li> {/* Añadir enlace a favoritos */}
          </ul>
        </nav>
        <Routes>
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/personaje/:id" element={<DetallePersonaje />} />
          <Route path="/favoritos" element={<PersonajesFavoritos />} /> {/* Ruta para favoritos */}
        </Routes>
      </Router>
    </FavoritosProvider>
  </React.StrictMode>
);
