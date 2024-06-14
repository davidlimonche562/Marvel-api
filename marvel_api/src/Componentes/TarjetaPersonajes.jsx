// src/components/TarjetaPersonaje.jsx
import React from 'react';
import Boton from './Boton';
import Estrella from './Estrella';

const TarjetaPersonaje = ({ personaje }) => {
  const estilos = {
    tarjeta: 'm-3 bg-negro w-[600px] h-[350px] rounded-xl flex relative overflow-hidden',
    imagen: 'w-[250px] h-[350px] rounded-l-xl object-cover',
    contenido: 'flex-1 p-4 flex flex-col justify-between',
    titulo: 'text-white font-bebas text-2xl',
    descripcion: 'text-gray-400 mt-2',
    estrella: 'absolute top-2 right-2',
    infoAdicional: 'font-montserrat text-white font-bold text-lg my-4',
    boton: 'self-end',
  };

  if (!personaje) {
    return <div className="text-white">Cargando...</div>; // Muestra un mensaje de carga si personaje no está definido
  }

  return (
    <div className={estilos.tarjeta}>
      <img className={estilos.imagen} src={personaje.imagen} alt={personaje.nombre} />
      <div className={estilos.contenido}>
        <div>
          <h2 className={estilos.titulo}>{personaje.nombre}</h2>
          <p className={estilos.infoAdicional}>Primer Aparición: {personaje.primeraAparicion}</p>
          <p className={estilos.infoAdicional}>Alias: {personaje.alias}</p>
          <p className={estilos.infoAdicional}>Series: {personaje.series}</p>
        </div>
        <div className={estilos.boton}>
          <Boton estilo="BotonRojo" texto="Ver más" />
        </div>
      </div>
      <div className={estilos.estrella}>
        <Estrella personaje={personaje} /> {/* Pasa personaje a Estrella */}
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
