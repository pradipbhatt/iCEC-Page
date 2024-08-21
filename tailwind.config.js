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
    },
  },
  plugins: [],
};
