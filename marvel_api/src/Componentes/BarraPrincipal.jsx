// src/components/BarraPrincipal.jsx
import React from 'react';

const BarraPrincipal = () => {
  const estilos = {
    contenedor: 'relative h-full w-full', // Contenedor principal
    fondoImagen: 'absolute inset-0 bg-cover bg-center', // Fondo de imagen
    overlay: 'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center', // Overlay oscuro
    h1: 'relative text-rojo-marvel font-bebas text-9xl', // Título H1 centrado
  };

  return (
    <div className={estilos.contenedor}>
      {/* Imagen de fondo */}
      <div
        className={estilos.fondoImagen}
        style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400)' }} // Ruta de la imagen de fondo
      ></div>
      {/* Overlay oscuro */}
      <div className={estilos.overlay}>
        {/* Título H1 */}
        <h1 className={estilos.h1}>Personajes</h1>
      </div>
    </div>
  );
};

export default BarraPrincipal;
