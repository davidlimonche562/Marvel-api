// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import Boton from './Componentes/Boton';
import TarjetaPersonaje from './Componentes/TarjetaPersonajes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Boton />
    <TarjetaPersonaje />
  </React.StrictMode>
);
