// src/Componentes/Footer.jsx
import React from 'react';
import Boton from './Boton'; // Importa tu componente de botón
import Logo from '../../public/0659ee4a07929a77ea29da8b6d996754.jpg'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importa los íconos

function Footer() {
  return (
    <footer className=" bg-[#1C1C1C] text-white py-8 px-4 mt-10">
      
      <div className="text-center mb-4 p-7">
        <h2 className="text-3xl font-bebas text-azul "> Explora el universo de marvel a fondo</h2>
        <p className="mt-2 font-montserrat text-center">Descubre todo sobre tus héroes favoritos y explora nuevas aventuras en el vasto universo de Marvel. Desde biografías detalladas hasta las últimas novedades, encuentra todo lo que necesitas para mantenerte al día con tus personajes preferidos.</p>
      </div>

     
    
    
      <hr className="border-t border-gray-600 my-6" />

  
      <div className="flex items-center justify-between">
      
        <img className='w-[150px] h-[70px]'  src={Logo} alt="" />
        
        <p className="flex-1 text-center">&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>

        
        <div className="flex justify-between w-32">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
