// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './tailwind.css';
import NavBard from './Componentes/NavBard'; // Importa el NavBar
import Personajes from './view/Personajes';
import Login from './view/Login';
import Registro from './view/Registro';
import PersonajeIndividual from './view/PersonajeIndividual';
import PersonajesFavoritos from './view/PersonajesFavoritos'; // Importa la vista de favoritos
import { FavoritosProvider } from './Componentes/FavoritosContext'; // Importa el proveedor de favoritos
import Home from './view/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritosProvider>
      <Router>
        <NavBard /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/personaje/:id" element={<PersonajeIndividual />} />
          <Route path="/favoritos" element={<PersonajesFavoritos />} />
        </Routes>
      </Router>
    </FavoritosProvider>
  </React.StrictMode>
);
