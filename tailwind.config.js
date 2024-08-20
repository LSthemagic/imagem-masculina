/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ajuste conforme necessário
  ],
  theme: {
    extend: {
      colors: {
        primary: '#28283a',   // Exemplo de cor personalizada
        secondary: '#ebc557', // Outra cor
      },
    },
  },
  plugins: [],
}
