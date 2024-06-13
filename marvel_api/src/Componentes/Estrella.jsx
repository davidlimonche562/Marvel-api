    // src/components/Estrella.jsx
    import React, { useState } from 'react';
    import { IoStarSharp } from 'react-icons/io5';

    const Estrella = () => {
    const [estaSeleccionada, setEstaSeleccionada] = useState(false);

    const manejarClick = () => {
    setEstaSeleccionada(!estaSeleccionada);
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
