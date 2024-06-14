    // src/pages/Personajes.jsx
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import TarjetaPersonaje from '../Componentes/TarjetaPersonajes';



    const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
    const apiKey = '0a9945532a6c010f16416b21cc865557' // Reemplaza esto con tu clave de API

    useEffect(() => {
    const fetchPersonajes = async () => {
        try {
        console.log("Enviando solicitud a la API...");
        const response = await axios.get(apiUrl, {
            params: {
            apikey: apiKey,
            limit: 6, // Limitar el número de personajes obtenidos
            },
        });

        const personajesData = response.data.data.results.map((personaje) => ({
            id: personaje.id,
            nombre: personaje.name,
            imagen: `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`,
            descripcion: personaje.description || 'Descripción no disponible.',
            primeraAparicion: personaje.comics.items[0]?.name || 'No disponible',
            alias: personaje.aliases ? personaje.aliases.join(', ') : 'No disponible',
            series: personaje.series.items.slice(0, 1).map((serie) => serie.name).join(', '),
        }));

        setPersonajes(personajesData);
        } catch (error) {
        console.error('Error al obtener los personajes:', error);
        }
    };

    fetchPersonajes();
    }, []);

    return (
    <section className='bg-gradient-to-br from-slate-950 to-slate-500 grid grid-cols-2 gap-6 w-full min-h-[100vh] px-6 py-8'>     
    {personajes.map((personaje) => (
        <TarjetaPersonaje key={personaje.id} personaje={personaje} />
        ))}

    </section>
    );
    };

    export default Personajes;
