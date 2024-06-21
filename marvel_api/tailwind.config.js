
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {
      colors: {
        'rojo-marvel': '#EC1D25',
        'rojo-marvel-oscuro': '#B71B22',
        'gris': '#4A4A4A',
        'negro': '#1C1C1C',
        'gris-claro': '#312E2E',
        'amarillo': '#FFD700',
        'azul': '#1976D2',
        'blanco': '#ECECEC',
        'blanco-oscuro': '#caf0f8'
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'fondo-personalizado': "url('./public/desktop-wallpaper-all-marvel-characters-characters.jpg')",
        'fondo-personalizado1': "url('./public/marvel-villains-comics-cover-t0bzu1wj3y9garb7.jpg')",
      },
    },
  },
  plugins: [],
};
