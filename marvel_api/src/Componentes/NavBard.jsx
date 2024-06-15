// src/components/NavBar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const styles = {
    navBar: "w-full h-24 flex justify-between items-center p-4 bg-black",
    container: "md:flex md:gap-6 font-family-mon items-center text-white hidden",
    img: "w-40 h-20",
    buttons: "py-4 px-4 sm:items-center sm:flex gap-4",
    button1: "py-1 px-4 w-auto rounded text-white bg-gray-500 hover:bg-gray-700",
    button2: "py-1 px-4 w-auto rounded text-white bg-red-600 hover:bg-red-700",
    button1Responsive: "sm:hidden py-1 px-4 rounded text-white bg-gray-500 hover:bg-gray-700",
    button2Responsive: "sm:hidden py-1 px-4 rounded text-white bg-red-600 hover:bg-red-700",
    hamburger: "md:hidden text-white w-10 h-10 cursor-pointer",
    responsiveContainer: "md:hidden text-white text-center w-full bg-black h-auto flex items-center flex-col text-sm justify-center gap-2 transition-all duration-300",
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const changeStyles = ({ isActive }) => ({
    transform: isActive ? "scale(1.1)" : "scale(1)",
  });

  return (
    <nav className="flex flex-col">
      <div className={styles.navBar}>
        <img className={styles.img}  alt="Logo" />
        <div className={`md:flex md:gap-6 items-center text-white ${showMenu ? '' : 'hidden'}`}>
          <NavLink style={changeStyles} to="/">Inicio</NavLink>
          <NavLink style={changeStyles} to="/personajes">Personajes</NavLink>
          <NavLink style={changeStyles} to="/favoritos">Favoritos</NavLink>
          <NavLink style={changeStyles} to="/contacto">Contáctanos</NavLink>
        </div>
        <div className={styles.buttons}>
          <NavLink to="/login" className={styles.button1}>Iniciar</NavLink>
          <NavLink to="/registro" className={styles.button2}>Registrarse</NavLink>
        </div>
        <img className={styles.hamburger} alt="Menú" onClick={toggleMenu} />
      </div>
      <div className={`${styles.responsiveContainer} ${showMenu ? '' : 'hidden'}`}>
        <NavLink style={changeStyles} to="/">Inicio</NavLink>
        <NavLink style={changeStyles} to="/personajes">Personajes</NavLink>
        <NavLink style={changeStyles} to="/favoritos">Favoritos</NavLink>
        <NavLink style={changeStyles} to="/contacto">Contáctanos</NavLink>
        <NavLink to="/login" className={styles.button1Responsive}>Iniciar</NavLink>
        <NavLink to="/registro" className={styles.button2Responsive}>Registrarse</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
