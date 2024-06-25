import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TarjetaPersonaje from '../Componentes/TarjetaPersonajes';
import BarraPrincipal from '../Componentes/BarraPrincipal';
import Paginacion from '../Componentes/Paginacion';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [personajesPorPagina, setPersonajesPorPagina] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPersonajes, setTotalPersonajes] = useState(0);
  const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
  const apiKey = '0a9945532a6c010f16416b21cc865557'; 
  const imagenPorDefecto = '/ruta-a-tu-imagen-por-defecto.jpg'; 
  const urlImagenMarvel = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  const maxPersonajes = 500; // Número máximo de personajes que deseas

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        // Calcular la cantidad de personajes a traer según el límite establecido y la página actual
        const personajesRestantes = Math.min(maxPersonajes - (currentPage - 1) * personajesPorPagina, personajesPorPagina);

        // Si no hay personajes restantes, no hace falta hacer la petición
        if (personajesRestantes <= 0) return;

        // Hacer la petición a la API de Marvel
        const response = await axios.get(apiUrl, {
          params: {
            apikey: apiKey,
            limit: personajesRestantes,
            offset: (currentPage - 1) * personajesPorPagina,
          },
        });

        // Transformar los datos obtenidos de la API
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

        // Actualizar el estado con los personajes obtenidos
        setPersonajes(personajesData);
        setTotalPersonajes(Math.min(response.data.data.total, maxPersonajes)); // Captura el total de personajes, limitado por maxPersonajes
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    };

    fetchPersonajes();
  }, [currentPage, personajesPorPagina]);

  // Calcular el número total de páginas
  const totalPaginas = Math.ceil(totalPersonajes / personajesPorPagina);

  // Filtrar las opciones de personajes por página según la cantidad de personajes total
  const opcionesPersonajesPorPagina = [6, 12, 24].filter((opcion) => opcion <= totalPersonajes);

  const estilos = {
    section: 'bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full min-h-[100vh] px-6 py-8',
    tarjeta: 'min-h-[300px] sm:min-h-0', 
    contenedorPrincipal: 'bg-gray-800 min-h-screen flex flex-col items-center', 
    contenedorCentrado: 'flex justify-center items-center my-4',
    label: 'mr-2 text-rojo-marvel',
    select: 'bg-gray-800 text-white px-2 py-1 rounded',
  };

  return (
    <div className={estilos.contenedorPrincipal}>
      <BarraPrincipal />
      <section className={estilos.section}>
        {personajes.map((personaje) => (
          <div key={personaje.id} className={estilos.tarjeta}>
            <TarjetaPersonaje personaje={personaje} />
          </div>
        ))}

        {totalPersonajes > personajesPorPagina && (
          <>
            <div className={estilos.contenedorCentrado}>
              <label className={estilos.label}>Personajes por página:</label>
              <select
                className={estilos.select}
                value={personajesPorPagina}
                onChange={(e) => setPersonajesPorPagina(Number(e.target.value))}
              >
                {opcionesPersonajesPorPagina.map((opcion) => (
                  <option key={opcion} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            </div>
            <div className={estilos.contenedorCentrado}>
              <Paginacion
                paginaActual={currentPage}
                totalPaginas={totalPaginas}
                setPaginaActual={setCurrentPage}
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Personajes;
