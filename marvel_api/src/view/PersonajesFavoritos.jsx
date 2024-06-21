import React from 'react';
import { useFavoritos } from '../Componentes/FavoritosContext';
import TarjetaPersonaje from '../Componentes/TarjetaPersonajes';

const PersonajesFavoritos = () => {
  const { favoritos } = useFavoritos();
  
  const estilos = {
    section: 'bg-gradient-to-br from-slate-950 to-slate-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full min-h-[100vh] px-6 py-8',
    vacio: 'text-white text-xl text-center col-span-full',
    tarjeta: 'min-h-[300px] sm:min-h-0', // Clase condicional para tarjetas
  };

  return (
    <section className={estilos.section}>
      {favoritos.length === 0 ? (
        <p className={estilos.vacio}>No hay personajes favoritos.</p>
      ) : (
        favoritos.map((personaje) => (
          <div key={personaje.id} className={estilos.tarjeta}>
            <TarjetaPersonaje personaje={personaje} />
          </div>
        ))
      )}
    </section>
  );
};

export default PersonajesFavoritos;
