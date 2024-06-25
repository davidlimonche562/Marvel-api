
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../public/Marvel_Logo.svg.png"
const NavBard = () => {
    const [autenticado, setAutenticado] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        const usuarioAutenticado = localStorage.getItem('autenticado');
        setAutenticado(!!usuarioAutenticado);
    }, []);

    // Manejo de logout
    const handleLogout = () => {
        localStorage.removeItem('autenticado');
        setAutenticado(false);
        localStorage.removeItem('esAdmin');
        localStorage.removeItem('usuarioActual');
        localStorage.removeItem('indice');
        alert('Cierre de sesión correctamente');
        navigate('/');
        location.reload();
    };

    // Función para alternar el menú
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    const changeStyles = ({ isActive }) => ({
        transform: isActive ? "scale(1.1)" : "scale(1)",
    });

    // Verificar si la ruta es '/login' o '/registro'
    const soloLogo = location.pathname === '/login' || location.pathname === '/registro';

    const estilos = {
        navBar: "w-full h-20 flex justify-between items-center p-4 bg-black",
        logoContainer: "flex justify-center items-center w-full", // Centrar el logo
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
            {soloLogo ? (
              <div className={estilos.logoContainer}>
                  <NavLink to="/">
                      <img className={estilos.img} src="{}" alt="Logo" />
                  </NavLink>
              </div>
          ) : (
            <>
              <NavLink to="/">
                <img className={estilos.img} src="{Logo}" alt="Logo" />
              </NavLink>
              {autenticado && (
                  <div className={`md:flex md:gap-6 items-center text-white ${showMenu ? '' : 'hidden'}`}>
                      <NavLink style={changeStyles} to="/">Inicio</NavLink>
                      <NavLink style={changeStyles} to="/personajes">Personajes</NavLink>
                      <NavLink style={changeStyles} to="/favoritos">Favoritos</NavLink>
                      {localStorage.getItem('esAdmin') === 'true' ? (
                          <NavLink style={changeStyles} to="/verMensajes">Ver Mensajes</NavLink>
                      ) : (
                          <NavLink style={changeStyles} to="/contacto">Contáctanos</NavLink>
                      )}   
                  </div>
              )}
              {autenticado ? (
                <div className="flex items-center">
                  <button className="py-1 px-4 w-auto rounded text-white bg-blue-600 hover:bg-blue-700" onClick={handleLogout}>Cerrar sesión</button>
                </div>
              ) : (
                <div className={estilos.buttons}>
                  <NavLink to="/login" className={estilos.button1}>Iniciar</NavLink>
                  <NavLink to="/registro" className={estilos.button2}>Registrarse</NavLink>
                </div>
              )}
              <img className={estilos.hamburger} src="/ruta-a-tu-icono-de-menu.png" alt="Menú" onClick={toggleMenu} />
            </>
          )}
        </div>
        {autenticado && (
          <div className={`${estilos.responsiveContainer} ${showMenu ? '' : 'hidden'}`}>
            <NavLink style={changeStyles} to="/">Inicio</NavLink>
            <NavLink style={changeStyles} to="/personajes">Personajes</NavLink>
            <NavLink style={changeStyles} to="/favoritos">Favoritos</NavLink>
            {localStorage.getItem('esAdmin') === 'true' ? (
                    <NavLink style={changeStyles} to="/verMensajes">Ver Mensajes</NavLink>
                  ) : (
                    <NavLink style={changeStyles} to="/contacto">Contáctanos</NavLink>
                  )}          
                  
            <button className={estilos.button1} onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </nav>
    );
};

export default NavBard;



