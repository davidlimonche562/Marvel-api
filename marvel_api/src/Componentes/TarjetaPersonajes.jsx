// src/components/TarjetaPersonaje.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Boton from './Boton';
import Estrella from './Estrella';

const TarjetaPersonaje = ({ personaje }) => {
  const navigate = useNavigate();

  const estilos = {
    tarjeta: 'm-3 bg-negro w-full sm:w-[600px] h-auto sm:h-[300px] rounded-xl flex flex-col sm:flex-row relative overflow-hidden',
    imagen: 'w-full sm:w-[250px] h-[200px] sm:h-[300px] rounded-t-xl sm:rounded-l-xl sm:rounded-t-none object-cover',
    contenido: 'flex-1 p-4 flex flex-col justify-between',
    titulo: 'text-blanco-oscuro font-bebas text-2xl sm:text-3xl',
    infoAdicional: 'font-montserrat text-blanco font-bold text-base my-2 sm:my-4',
    subtitulos: 'text-azul',
    boton: 'self-end mt-4 sm:mt-0',
    estrella: 'absolute top-2 right-2',
  };

  if (!personaje) {
    return <div className="text-white">Cargando...</div>;
  }

  const manejarClick = () => {
    navigate(`/personaje/${personaje.id}`);
  };

  return (
    <div className={estilos.tarjeta}>
      <img className={estilos.imagen} src={personaje.imagen} alt={personaje.nombre} />
      <div className={estilos.contenido}>
        <div>
          <h2 className={estilos.titulo}>{personaje.nombre}</h2>
          <p className={estilos.infoAdicional}><span className={estilos.subtitulos}>Primera Aparición:</span> {personaje.primeraAparicion}</p>
          <p className={estilos.infoAdicional}><span className={estilos.subtitulos}>Evento:</span> {personaje.eventos}</p>
          <p className={estilos.infoAdicional}><span className={estilos.subtitulos}>Series:</span> {personaje.series}</p>
        </div>
        <div className={estilos.boton}>
          <Boton estilo="BotonRojo" texto="Ver más" onClick={manejarClick} />
        </div>
      </div>
      <div className={estilos.estrella}>
        <Estrella personaje={personaje} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
