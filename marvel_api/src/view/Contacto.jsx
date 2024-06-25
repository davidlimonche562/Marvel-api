import React, { useState, navigate } from 'react';
import  {useRef} from 'react';


const estilos = {
    contenedor: 'flex items-center justify-center h-screen relative bg-fondo-personalizado1 bg-cover bg-center overflow-hidden',
    overlay: 'absolute inset-0 bg-black opacity-85',
    formulario: 'relative z-10 bg-white p-8 rounded-lg shadow-md w-[90%] max-w-md mx-auto',
    titulo: 'text-2xl font-semibold text-gray-800 mb-6 text-center',
    label: 'block text-gray-700 font-semibold mb-2 mt-4',
    input: 'w-full p-3 border border-gray-300 rounded mt-1 text-gray-700',
    boton: 'w-full bg-rojo-marvel hover:bg-rojo-marvel-oscuro text-white py-3 rounded mt-6 cursor-pointer font-bebas text-xl',
};


const Contacto = () => {
    const formRef = useRef();
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        descripcion: '',
        email: '',
        nombreUsuario: '',
        fecha: ''
    });

    const date = new Date().toDateString();     
    //aqui llamo al usuario actual
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    const email = usuarioActual.email;
    const nombreUsuario = usuarioActual.nombreUsuario;

  const handleSubmit = (event) => {
      event.preventDefault();

      const form = formRef.current;
      const nombre = form.nombre.value;
      const apellido = form.apellido.value;
      const telefono = form.telefono.value;
      const descripcion = form.descripcion.value;

      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
          alert('El nombre solo puede contener letras y espacios');
          return;
      }

      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
          alert('El apellido solo puede contener letras y espacios');
          return;
      }

      if (!/^\d{7,12}$/.test(telefono)) {
          alert('El teléfono solo puede contener números y debe tener entre 7 y 12 dígitos');
          return;
      }

      if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+$/.test(descripcion)) {
          alert('La descripción solo puede contener letras, números y símbolos');
          return;
      }



      
      const contacto = {
          nombre,
          apellido,
          telefono,
          descripcion,
          email,
          nombreUsuario,
          fecha: date
      };

      const contactos = JSON.parse(localStorage.getItem('contactos')) || [];
      contactos.push(contacto);
      localStorage.setItem('contactos', JSON.stringify(contactos));

      setDatos({
          nombre: '',
          apellido: '',
          telefono: '',
          descripcion: '',
          email: '',
          nombreUsuario: '',
          fecha: ''
    });

      alert('Contacto enviado correctamente');
      window.location.href = '/';
  };

    return (
        <div className={estilos.contenedor}>
            <div className={estilos.overlay}>
                <form ref={formRef} onSubmit={handleSubmit} className={estilos.formulario}>
                    <h2 className={estilos.titulo}>Contactanos</h2>
                    <label className={estilos.label}>
                        Nombre:
                        <input required type="text" className={estilos.input} name="nombre" />
                    </label>
                    <label className={estilos.label}>
                        Apellido:
                        <input required type="text" className={estilos.input} name="apellido" />
                    </label>
                    <label className={estilos.label}>
                        Teléfono:
                        <input  type="tel" className={estilos.input} name="telefono" />
                    </label>
                    <input type="hidden" name="fecha" value={date} />
                    <label className={estilos.label}>
                        Descripción:
                        <textarea required patt className={estilos.input} name="descripcion" rows="4" />
                    </label>
                    <button type="submit" className={estilos.boton} onClick={handleSubmit}>Enviar</button> 
                    
                </form>
            </div>
          
        </div>
    );
};

export default Contacto;