
import React, { useState, useEffect } from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { useFavoritos } from './FavoritosContext';

const Estrella = ({ personaje }) => {
  const { favoritos, toggleFavorito } = useFavoritos();
  const [estaSeleccionada, setEstaSeleccionada] = useState(false);

  useEffect(() => {
    if (personaje) {
      const esFavorito = favoritos.some(fav => fav.id === personaje.id);
      setEstaSeleccionada(esFavorito);
    }
  }, [favoritos, personaje]);

  const manejarClick = () => {
    if (personaje) { 
      toggleFavorito(personaje);
      setEstaSeleccionada(!estaSeleccionada);
    }
  };

  const estilos = {
    estrella: `h-[28px] w-[22px] hover:text-amarillo transition-colors duration-200 ${
      estaSeleccionada ? 'text-amarillo' : 'text-emerald-50'
    }`,
    divEstrella: 'h-[28px] w-[32px] bg-gris-claro flex items-center justify-center rounded-lg cursor-pointer'
  };

  return (
    <div
      className={estilos.divEstrella}
      onClick={manejarClick}
    >
      <IoStarSharp className={estilos.estrella} />
    </div>
  );
};

export default Estrella;
