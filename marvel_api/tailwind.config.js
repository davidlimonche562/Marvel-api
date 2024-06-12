// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Asegúrate de que las rutas sean correctas
  theme: {
    extend: {
      colors: {
        'rojo-marvel': '#EC1D25', 
        'rojo-marvel-oscuro': '#B71B22',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
