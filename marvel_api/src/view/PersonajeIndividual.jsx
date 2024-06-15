import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PersonajeIndividual = () => {
    const { id } = useParams();
    const [personaje, setPersonaje] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const fetchPersonaje = async () => {
        try {
            const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
            params: {
                apikey: '0a9945532a6c010f16416b21cc865557'
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

    const toggleContent = (key) => {
        setShowContent(prevShowContent => {
        if (prevShowContent === key) {
            return false;
        }
        return key;
        });
    };

    if (loading) {
        return <div className="text-white text-center">Cargando...</div>;
    }

    if (!personaje) {
        return <div className="text-white text-center">No se encontró el personaje.</div>;
    }

    const styles = {
        container: 'min-h-screen flex flex-col items-center justify-center mt-8',
        content: 'w-[50%] flex flex-col gap-4 bg-gradient-to-br from-slate-950 to-slate-500 p-6 text-white rounded-lg shadow-lg',
        title: 'text-4xl font-bold mb-6',
        button: 'bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-300',
        description: 'text-xl mb-4',
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{personaje.name}</h1>
                <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} alt={personaje.name} className="w-full h-[450px] object-cover rounded-lg mb-6" />
                <p className={styles.description}><strong>Descripción:</strong> {personaje.description || 'No disponible'}</p>
                <button className={styles.button} onClick={() => toggleContent('comics')}> Comics</button>
                {showContent === 'comics' && (
                <p className={styles.description}><strong>Comics:</strong> {personaje.comics.items.map(comic => comic.name).join(', ')}</p>
                )}
                <button className={styles.button} onClick={() => toggleContent('series')}> Series</button>
                {showContent === 'series' && (
                <p className={styles.description}><strong>Series:</strong> {personaje.series.items.map(serie => serie.name).join(', ')}</p>
                )}
                <button className={styles.button} onClick={() => toggleContent('historias')}> Historias</button>
                {showContent === 'historias' && (
                <p className={styles.description}><strong>Historias:</strong> {personaje.stories.items.map(story => story.name).join(', ')}</p>
                )}
                <button className={styles.button} onClick={() => toggleContent('eventos')}> Eventos</button>
                {showContent === 'eventos' && (
                <p className={styles.description}><strong>Eventos:</strong> {personaje.events.items.map(event => event.name).join(', ')}</p>
                )}
            </div>
        </div>
    );
};

export default PersonajeIndividual;