// src/context/FavoritosContext.jsx
import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export const useFavoritos = () => useContext(FavoritosContext);

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const saved = localStorage.getItem('favoritos');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorito = (personaje) => {
    setFavoritos((prevFavoritos) => {
      const existe = prevFavoritos.find(fav => fav.id === personaje.id);
      const nuevosFavoritos = existe
        ? prevFavoritos.filter(fav => fav.id !== personaje.id)
        : [...prevFavoritos, personaje];

      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      return nuevosFavoritos;
    });
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};
