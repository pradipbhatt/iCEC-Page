/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        primary: '#020817',
        background: '#ffffff',
        baseBackground: '#eff6ff', // Updated background color
        titleColor: '#1e3a8a',    // Assuming this is the color for titles
      },
      fontSize: {
        base: '16px',
        title: '30px', // Added custom font size for titles
      },
      lineHeight: {
        base: '24px',
        title: '36px', // Added custom line height for titles
      },
      backgroundImage: {
        'grid-mobile': 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)',
        'grid-tablet': 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)',
        'grid-desktop': 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-mobile': '20px 20px', // Smaller grid for mobile
        'grid-tablet': '30px 30px', // Medium grid size
        'grid-desktop': '40px 40px', // Larger grid size
        'grid-xl': '50px 50px',      // Even larger grid size for extra-large screens
      },
    },
  },
  plugins: [],
};
