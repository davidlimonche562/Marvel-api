// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './tailwind.css';
import Personajes from './view/Personajes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/personajes">Personajes</Link></li>
        </ul>
      </nav>
      <Routes>

        <Route path="/personajes" element={<Personajes />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
