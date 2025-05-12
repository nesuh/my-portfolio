module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}', 
      './components/**/*.{js,ts,jsx,tsx}', 
    ],
    darkMode: 'class', // Enables dark mode with class-based toggling
    theme: {
      extend: {
        colors: {
            'custom-dark': '#121212',
            'custom-light': '#f5f5f5',
          },
      },
    },
    plugins: [],
  }
  