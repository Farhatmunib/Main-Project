/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",      // This will scan the index.html for class usage
    "./dist/**/*.{css,js}" // This will scan all CSS and JS files in dist folder for Tailwind classes
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',    // Extra small screen
        'sm': '640px',    // Small screen
        'md': '768px',    // Medium screen
        'lg': '1024px',   // Large screen
        'xl': '1280px',   // Extra large screen
        '2xl': '1536px',  // Double extra large screen
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding locally hosted Poppins font
      },
    },
  },
  plugins: [],
};
