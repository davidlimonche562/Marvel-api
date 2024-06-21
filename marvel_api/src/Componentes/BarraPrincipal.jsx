// src/components/BarraPrincipal.jsx
import React from 'react';
import Imagen from '../../public/desktop-wallpaper-all-marvel-characters-characters.jpg'


const BarraPrincipal = () => {
  const estilos = {
    contenedor: 'relative h-full w-full', // Contenedor principal
    fondoImagen: ' bg-fondo-personalizado bg-cover h-[300px] overflow-hidden', // Fondo de imagen
    overlay: 'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center', // Overlay oscuro
    h1: 'relative text-rojo-marvel font-bebas text-9xl', // Título H1 centrado
  };

  return (
    <div className={estilos.contenedor}>
     
      <div
        className={estilos.fondoImagen} 
      ></div>
     
      <div className={estilos.overlay}>
        
        <h1 className={estilos.h1}>Personajes</h1>
      </div>
    </div>
  );
};

export default BarraPrincipal;
