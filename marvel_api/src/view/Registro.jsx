    // src/pages/Registro.jsx
    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    const Registro = () => {
        const [usuario, setUsuario] = useState({
            nombreUsuario: '',
            email: '',
            password: ''
        });
        const [errores, setErrores] = useState({});
        const navigate = useNavigate();
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            setUsuario({
            ...usuario,
            [name]: value
            });
        };
        
        const validarCampos = () => {
            let erroresTemp = {};
            const regexNombreUsuario = /^[a-z0-9]+$/; // Solo minúsculas y números
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validación básica de correo
            const regexPassword = /^.{8,}$/; // Mínimo 8 caracteres
        
            if (!regexNombreUsuario.test(usuario.nombreUsuario)) {
            erroresTemp.nombreUsuario = 'El nombre de usuario solo puede contener letras minúsculas y números.';
            }
            if (!regexEmail.test(usuario.email)) {
            erroresTemp.email = 'Correo electrónico no válido.';
            }
            if (!regexPassword.test(usuario.password)) {
            erroresTemp.password = 'La contraseña debe tener al menos 8 caracteres.';
            }
            return erroresTemp;
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            const erroresValidacion = validarCampos();
            if (Object.keys(erroresValidacion).length > 0) {
            setErrores(erroresValidacion);
            } else {
            // Guardar usuario en localStorage
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('Usuario registrado correctamente');
            setUsuario({
                nombreUsuario: '',
                email: '',
                password: ''
            });
            navigate('/Login'); // Redirige al home
            }
        };

    const estilos = {
    contenedor: 'h-screen w-full flex items-center justify-center bg-cover bg-center relative overflow-hidden',
    overlay: 'absolute inset-0 bg-black opacity-50',
    formulario: 'relative z-10 bg-white p-8 rounded-lg shadow-md w-[90%] max-w-md',
    titulo: 'text-2xl font-semibold text-gray-800 mb-6 text-center',
    label: 'block text-gray-700 font-semibold mb-2 mt-4',
    input: 'w-full p-3 border border-gray-300 rounded mt-1 text-gray-700',
    inputError: 'border-red-500', // Estilo para inputs con error
    errorMsg: 'text-red-500 text-sm mt-1',
    boton: 'w-full bg-rojo-marvel hover:bg-rojo-marvel-oscuro text-white py-3 rounded mt-6 cursor-pointer font-bebas text-xl',

    };
    return (
        <div className={estilos.contenedor} style={{ backgroundImage: 'url(/ruta-a-tu-imagen.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className={estilos.overlay}></div>
            <form className={estilos.formulario} onSubmit={handleSubmit}>
            <h2 className={estilos.titulo}>Registro</h2>
            <label className={estilos.label} htmlFor="nombreUsuario">Nombre de Usuario</label>
            <input
                type="text"
                id="nombreUsuario"
                name="nombreUsuario"
                placeholder="Nombre de Usuario"
                className={`${estilos.input} ${errores.nombreUsuario ? estilos.inputError : ''}`}
                value={usuario.nombreUsuario}
                onChange={handleChange}
                required
            />
            {errores.nombreUsuario && <p className={estilos.errorMsg}>{errores.nombreUsuario}</p>}
            <label className={estilos.label} htmlFor="email">Correo Electrónico</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo Electrónico"
                className={`${estilos.input} ${errores.email ? estilos.inputError : ''}`}
                value={usuario.email}
                onChange={handleChange}
                required
            />
            {errores.email && <p className={estilos.errorMsg}>{errores.email}</p>}
            <label className={estilos.label} htmlFor="password">Contraseña</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                className={`${estilos.input} ${errores.password ? estilos.inputError : ''}`}
                value={usuario.password}
                onChange={handleChange}
                required
            />
            {errores.password && <p className={estilos.errorMsg}>{errores.password}</p>}
            <button type="submit" className={estilos.boton}>Registrarse</button>
            </form>
        </div>
        );
    };

    export default Registro;