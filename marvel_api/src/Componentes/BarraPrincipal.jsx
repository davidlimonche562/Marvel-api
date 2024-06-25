
import React from 'react';
import Imagen from '../../public/desktop-wallpaper-all-marvel-characters-characters.jpg'


const BarraPrincipal = () => {
  const estilos = {
    contenedor: 'relative h-full w-full', 
    fondoImagen: ' bg-fondo-personalizado bg-cover h-[300px] overflow-hidden',
    overlay: 'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url{Imagen}]', 
    h1: 'relative text-rojo-marvel font-bebas text-9xl', 
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
