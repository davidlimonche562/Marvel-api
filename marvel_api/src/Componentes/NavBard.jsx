// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBard = () => {
  const [autenticado, setAutenticado] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Verificar autenticación cuando el componente se monta
  useEffect(() => {
    const usuarioAutenticado = localStorage.getItem('autenticado');
    if (usuarioAutenticado) {
      setAutenticado(true);
    }
  }, []);

  // Función para manejar cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('autenticado'); // Elimina el indicador de autenticación
    setAutenticado(false);
    alert("Cerrando seccion...");
    navigate('/'); // Redirige al inicio
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const changeStyles = ({ isActive }) => ({
    transform: isActive ? "scale(1.1)" : "scale(1)",
  });

  const estilos = {
    navBar: "w-full h-20 flex justify-between items-center p-4 bg-black",
    container: "md:flex md:gap-6 font-family-mon items-center text-white",
    img: "w-40 h-20",
    buttons: "py-4 px-4 sm:items-center sm:flex gap-4",
    button1: "py-1 px-4 w-auto rounded text-white bg-gray-500 hover:bg-gray-700",
    button2: "py-1 px-4 w-auto rounded text-white bg-red-600 hover:bg-red-700",
    hamburger: "md:hidden text-white w-10 h-10 cursor-pointer",
    responsiveContainer: "md:hidden text-white text-center w-full bg-black h-auto flex items-center flex-col text-sm justify-center gap-2 transition-all duration-300",
  };

  return (
    <nav className="flex flex-col">
      <div className={estilos.navBar}>
        <img className={estilos.img} src="/ruta-a-tu-logo.png" alt="Logo" />
        <div className={`md:flex md:gap-6 items-center text-white ${showMenu ? '' : 'hidden'}`}>
          <NavLink style={changeStyles} to="/">Inicio</NavLink>
          <NavLink style={changeStyles} to="/personajes">Personajes</NavLink>
          <NavLink style={changeStyles} to="/favoritos">Favoritos</NavLink>
          <NavLink style={changeStyles} to="/contacto">Contáctanos</NavLink>
        </div>
        {autenticado ? (
          <div className="flex items-center">
            <button className="py-1 px-4 w-auto rounded text-white bg-blue-600 hover:bg-blue-700" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          // Mostrar cuando el usuario no está autenticado
          <div className={estilos.buttons}>
            <NavLink to="/login" className={estilos.button1}>Iniciar</NavLink>
            <NavLink to="/registro" className={estilos.button2}>Registrarse</NavLink>
          </div>
        )}
        <img className={estilos.hamburger} src="/ruta-a-tu-icono-de-menu.png" alt="Menú" onClick={toggleMenu} />
      </div>
      <div className={`${estilos.responsiveContainer} ${showMenu ? '' : 'hidden'}`}>
        <NavLink style={changeStyles} to="/">Inicio</NavLink>
        <NavLink style={changeStyles} to="/personajes">Personajes</NavLink>
        <NavLink style={changeStyles} to="/favoritos">Favoritos</NavLink>
        <NavLink style={changeStyles} to="/contacto">Contáctanos</NavLink>
        {autenticado ? (
          <button className={estilos.button1} onClick={handleLogout}>Cerrar sesión</button>
        ) : (
          <>
            <NavLink to="/login" className={estilos.button1}>Iniciar</NavLink>
            <NavLink to="/registro" className={estilos.button2}>Registrarse</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBard;
