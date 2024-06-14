// src/components/TarjetaPersonaje.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Boton from './Boton';
import Estrella from './Estrella';

const TarjetaPersonaje = ({ personaje }) => {
  const navigate = useNavigate();

  const estilos = {
    tarjeta: 'm-3 bg-negro w-[600px] h-[350px] rounded-xl flex relative overflow-hidden',
    imagen: 'w-[250px] h-[350px] rounded-l-xl object-cover',
    contenido: 'flex-1 p-4 flex flex-col justify-between relative',
    titulo: 'text-white font-bebas text-2xl',
    estrella: 'absolute top-2 right-2',
    infoAdicionalTitulo: 'font-montserrat text-white font-bold text-lg my-2',
    infoAdicionalValor: 'font-montserrat text-gray-400 text-base',
    boton: 'absolute bottom-4 right-4', // Posición absoluta para el botón
  };

  const handleVerMas = () => {
    navigate(`/personaje/${personaje.id}`);
  };

  if (!personaje || !personaje.imagen) {
    return <div className="text-white">Cargando...</div>;
  }

  return (
    <div className={estilos.tarjeta}>
      <img className={estilos.imagen} src={personaje.imagen} alt={personaje.nombre} />
      <div className={estilos.contenido}>
        <div>
          <h2 className={estilos.titulo}>{personaje.nombre}</h2>
          <p className={estilos.infoAdicionalTitulo}>Primer Aparición: <span className={estilos.infoAdicionalValor}>{personaje.primeraAparicion}</span></p>
          <p className={estilos.infoAdicionalTitulo}>Alias: <span className={estilos.infoAdicionalValor}>{personaje.alias}</span></p>
          <p className={estilos.infoAdicionalTitulo}>Series: <span className={estilos.infoAdicionalValor}>{personaje.series}</span></p>
        </div>
        <div className={estilos.boton}>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleVerMas}>
            Ver más
          </button>
        </div>
      </div>
      <div className={estilos.estrella}>
        <Estrella />
      </div>
    </div>
  );
};


export default TarjetaPersonaje;
