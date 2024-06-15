// src/pages/Personajes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TarjetaPersonaje from '../Componentes/TarjetaPersonajes';
import BarraPrincipal from '../Componentes/BarraPrincipal';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
  const apiKey = '0a9945532a6c010f16416b21cc865557'; // Reemplaza esto con tu clave de API
  const imagenPorDefecto = '/ruta-a-tu-imagen-por-defecto.jpg'; // Ruta a tu imagen por defecto
  const urlImagenMarvel = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            apikey: apiKey,
            limit: 6, // Limitar el número de personajes obtenidos
          },
        });

        const personajesData = response.data.data.results.map((personaje) => {
          const imagenURL = `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`;
          return {
            id: personaje.id,
            nombre: personaje.name,
            imagen: imagenURL === urlImagenMarvel ? imagenPorDefecto : imagenURL,
            descripcion: personaje.description || 'Descripción no disponible.',
            primeraAparicion: personaje.comics.items[0]?.name || 'No disponible',
            alias: personaje.aliases ? personaje.aliases.join(', ') : 'No disponible',
            series: personaje.series.items.slice(0, 1).map((serie) => serie.name).join(', ') || 'No disponible',
            comics: personaje.comics.items.slice(0, 1).map((comic) => comic.name).join(', ') || 'No disponible',
            eventos: personaje.events.items.slice(0, 1).map((evento) => evento.name).join(', ') || 'No disponible'
          };
        });

        setPersonajes(personajesData);
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    };

    fetchPersonajes();
  }, []);

  return (
  <section >
    <div className='h-[300px]'>
    <BarraPrincipal />
    </div>
    <main className='bg-gradient-to-br from-slate-950 to-slate-500 grid grid-cols-2 gap-6 w-full min-h-[100vh] px-6 py-8'>
         
      {personajes.map((personaje) => (
        <TarjetaPersonaje key={personaje.id} personaje={personaje} />
      ))}
    </main>
    </section>
  );
};

export default Personajes;
