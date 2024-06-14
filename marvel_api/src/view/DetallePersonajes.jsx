// src/pages/DetallePersonaje.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetallePersonaje = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [personaje, setPersonaje] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonaje = async () => {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
          params: {
            apikey: '0a9945532a6c010f16416b21cc865557' // Reemplaza esto con tu clave de API válida
          }
        });
        setPersonaje(response.data.data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los detalles del personaje:', error);
      }
    };
    fetchPersonaje();
  }, [id]);

  if (loading) {
    return <div className="text-white">Cargando...</div>;
  }

  if (!personaje) {
    return <div className="text-white">No se encontró el personaje.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-500 p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">{personaje.name}</h1>
      <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} alt={personaje.name} className="w-[300px] h-[450px] object-cover rounded-lg mb-6" />
      <p className="text-xl mb-4"><strong>Descripción:</strong> {personaje.description || 'No disponible'}</p>
      <p className="text-xl mb-4"><strong>Comics:</strong> {personaje.comics.items.map(comic => comic.name).join(', ')}</p>
      <p className="text-xl mb-4"><strong>Series:</strong> {personaje.series.items.map(serie => serie.name).join(', ')}</p>
      <p className="text-xl mb-4"><strong>Historias:</strong> {personaje.stories.items.map(story => story.name).join(', ')}</p>
      <p className="text-xl mb-4"><strong>Eventos:</strong> {personaje.events.items.map(event => event.name).join(', ')}</p>
    </div>
  );
};

export default DetallePersonaje;
