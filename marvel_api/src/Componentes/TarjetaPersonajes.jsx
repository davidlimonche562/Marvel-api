    // src/components/TarjetaPersonaje.jsx
    import React from 'react';
    import Boton from './Boton';
    import Estrella from './Estrella';

    const TarjetaPersonaje = () => {

    const estilos = {
    tarjeta: 'm-10 bg-negro w-[650px] h-[300px] rounded-xl flex relative overflow-hidden',
    imagen: 'w-[250px] h-[300px] rounded-l-xl object-cover',
    contenido: 'flex-1 p-4 flex flex-col justify-between',
    titulo: 'text-white font-bebas text-2xl',
    descripcion: 'text-gray-400 mt-2',
    estrella: 'absolute top-2 right-2',
    boton: 'self-end',
    };

    return (
    <div className={estilos.tarjeta}>
        
        <img className={estilos.imagen} src="https://via.placeholder.com/250x300" alt="Imagen del personaje" />
        <div className={estilos.contenido}>
        <div>
            <h2 className={estilos.titulo}>IRON MAN</h2>
            <p className={estilos.descripcion}>Descripción breve del personaje.</p>
        </div>
        <div className={estilos.boton}>
            <Boton estilo='BotonLogin' texto='hola' />
            
        </div>
        </div>
        <div className={estilos.estrella}>
        <Estrella />
        </div>
    </div>
    );
    };

    export default TarjetaPersonaje;
