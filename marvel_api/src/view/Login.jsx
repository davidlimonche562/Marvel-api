import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredenciales({
      ...credenciales,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      const administrador = JSON.parse(localStorage.getItem('administrador')) || [];
      const usuarioValido = usuarios.find(
          (usuario) => usuario.email === credenciales.email && usuario.password === credenciales.password
    );
    const indice = usuarios.findIndex(
        (usuario) => usuario.email === credenciales.email && usuario.password === credenciales.password
      
    )
    const adminValido = administrador.find(
        (admin) => admin.email === credenciales.email && admin.password === credenciales.password
    );
  
    if (usuarioValido) {
        localStorage.setItem('usuarioActual', JSON.stringify(usuarios[indice]));
        localStorage.setItem('indice', indice);
        localStorage.setItem('autenticado', 'true');
        localStorage.removeItem('esAdmin');
        
        alert("Inicio sesión correctamente");
        navigate('/');
        location.reload();
    } else if (adminValido) {
        localStorage.setItem('autenticado', 'true');
        localStorage.setItem('esAdmin', 'true');
        alert("Inicio sesión correctamente como administrador");
        navigate('/');
        location.reload();
    } else {
        setError('Correo electrónico o contraseña incorrectos');
    }
  };

  const estilos = {
    contenedor: 'flex items-center justify-center h-screen relative bg-fondo-personalizado1 bg-cover bg-center overflow-hidden',
    overlay: 'absolute inset-0 bg-black opacity-50',
    formulario: 'relative z-10 bg-white p-8 rounded-lg shadow-md w-[90%] max-w-md mx-auto',
    titulo: 'text-2xl font-semibold text-gray-800 mb-6 text-center',
    label: 'block text-gray-700 font-semibold mb-2 mt-4',
    input: 'w-full p-3 border border-gray-300 rounded mt-1 text-gray-700',
    errorMsg: 'text-red-500 text-sm mt-1',
    boton: 'w-full bg-rojo-marvel hover:bg-rojo-marvel-oscuro text-white py-3 rounded mt-6 cursor-pointer font-bebas text-xl',
    ancla: 'block mt-4 text-center text-blue-600 hover:text-blue-800 cursor-pointer',
  };

  return (
    <div className={estilos.contenedor}>
      <div className={estilos.overlay}></div>
      <form className={estilos.formulario} onSubmit={handleSubmit}>
        <h2 className={estilos.titulo}>Iniciar Sesión</h2>
        <label className={estilos.label} htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo Electrónico"
          className={estilos.input}
          value={credenciales.email}
          onChange={handleChange}
          required
        />
        <label className={estilos.label} htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          className={estilos.input}
          value={credenciales.password}
          onChange={handleChange}
          required
        />
        {error && <p className={estilos.errorMsg}>{error}</p>}
        <button type="submit" className={estilos.boton}>Ingresar</button>
        <p><Link to='/registro'><span className={estilos.ancla}>¿No tienes cuenta? Regístrate aquí</span></Link></p>
      </form>
    </div>
  );
};

export default Login;
