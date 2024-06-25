import React, { useState } from 'react';

const VerMensajes = () => {
    const estilos = {
        contenedor: 'flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md',
        mensaje: 'p-4 mb-2 border border-gray-300 rounded',
        fecha: 'text-gray-500 text-sm',
        contenido: 'mt-2',
        boton: 'mt-4 bg-rojo-marvel hover:bg-rojo-marvel-oscuro text-white py-2 px-4 rounded cursor-pointer font-bebas text-xl',
    };
    const [showContent, setShowContent] = useState(null);

    const mensajes = JSON.parse(localStorage.getItem('contactos')) || [];
    console.log(mensajes);

    const borrarMensaje = (email) => {
        const mensajesActualizados = mensajes.filter((mensaje) => mensaje.email !== email);
        localStorage.setItem('contactos', JSON.stringify(mensajesActualizados));
    };

    const toggleContent = (email) => {
        setShowContent(prevShowContent => (prevShowContent === email ? null : email));
    };

    return (
        <div className={estilos.contenedor}>
            {mensajes.map((mensaje) => (
                <div key={mensaje.email} className={estilos.mensaje}>
                    <p className={estilos.fecha}>{mensaje.fecha}</p>
                    <p className={estilos.contenido}>Nombre de Usuario: {mensaje.nombreUsuario}</p>
                    <button className={estilos.boton} onClick={() => toggleContent(mensaje.email)}>Ver Mensaje</button>
                    
                    {showContent === mensaje.email && (
                        <div className={estilos.contenido}>
                            <p className={estilos.contenido}>Correo: {mensaje.email}</p>
                            <p className={estilos.contenido}>Nombre: {mensaje.nombre}</p>
                            <p className={estilos.contenido}>Telefono: {mensaje.telefono}</p>
                            <p className={estilos.contenido}>{mensaje.descripcion}</p>
                        </div>
                  )}
                </div>
            ))}
        </div>
      );
};

export default VerMensajes;