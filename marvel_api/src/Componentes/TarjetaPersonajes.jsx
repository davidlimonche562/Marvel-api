    // src/components/TarjetaPersonaje.jsx
    import React from 'react';
    import Boton from './Boton';
    import Estrella from './Estrella';

    const TarjetaPersonaje = ({ personaje }) => {
    const estilos = {
    tarjeta: 'm-3 bg-negro w-[600px] h-[300px] rounded-xl flex relative overflow-hidden',
    imagen: 'w-[250px] h-[300px] rounded-l-xl object-cover',
    contenido: 'flex-1 p-4 flex flex-col justify-between',
    titulo: 'text-white font-bebas text-2xl',
    descripcion: 'text-gray-400 mt-2',
    estrella: 'absolute top-2 right-2',
    infoAdicional1: 'font-montserrat text-white font-bold text-lg my-4',
    infoAdicional2:'font-montserrat text-gray-400 text-base',
    boton: 'absolute bottom-4 right-4', // Posición absoluta para el botón

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
          <p className={estilos.infoAdicional1}>Primer Aparición: <span className={estilos.infoAdicional2}>{personaje.primeraAparicion}</span></p>
          <p className={estilos.infoAdicional1}>Alias: <span className={estilos.infoAdicional2}>{personaje.alias}</span></p>
          <p className={estilos.infoAdicional1}>Series: <span className={estilos.infoAdicional2}>{personaje.series}</span></p>
        </div>
        <div className={estilos.boton}>
            <Boton estilo="BotonRojo" texto="Ver más" />
        </div>
        </div>
        <div className={estilos.estrella}>
        <Estrella />
        </div>
    </div>
    );
    };


    export default TarjetaPersonaje;
