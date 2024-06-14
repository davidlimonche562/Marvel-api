// src/pages/PersonajesFavoritos.jsx
import React from 'react';
import { useFavoritos } from '../Componentes/FavoritosContext';
import TarjetaPersonaje from '../Componentes/TarjetaPersonajes';

const PersonajesFavoritos = () => {
  const { favoritos } = useFavoritos();
  const estilos ={
    section:'bg-gradient-to-br from-slate-950 to-slate-500 grid grid-cols-2 gap-6 w-full min-h-[100vh] px-6 py-8',
    vacio: 'text-white text-xl'
  }

  return (
    <section className={estilos.section}>
      {favoritos.length === 0 ? (
        <p className={estilos.vacio}>No hay personajes favoritos.</p>
      ) : (
        favoritos.map((personaje) => (
          <TarjetaPersonaje key={personaje.id} personaje={personaje} />
        ))
      )}
    </section>
  );
};

export default PersonajesFavoritos;
