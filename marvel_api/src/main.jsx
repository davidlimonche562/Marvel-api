
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './tailwind.css';
import NavBard from './Componentes/NavBard'; // Importa el NavBar
import Personajes from './view/Personajes';
import Login from './view/Login';
import Registro from './view/Registro';
import PersonajeIndividual from './view/PersonajeIndividual';
import PersonajesFavoritos from './view/PersonajesFavoritos'; // Importa la vista de favoritos
import { FavoritosProvider } from './Componentes/FavoritosContext'; // Importa el proveedor de favoritos
import Home from './view/Home';
import Footer from './Componentes/Footer';
import Contacto from './view/Contacto';
import VerMensajes from './view/VerMensajes';

const App = () => {
  const location = useLocation();

  const mostrarFooter = !['/login', '/registro'].includes(location.pathname);

  return (
    <>
      <NavBard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/personaje/:id" element={<PersonajeIndividual />} />
        <Route path="/favoritos" element={<PersonajesFavoritos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/verMensajes" element={<VerMensajes />} />
      </Routes>
      {mostrarFooter && <Footer />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritosProvider>
      <Router>
        <App />
      </Router>
    </FavoritosProvider>
  </React.StrictMode>
);
