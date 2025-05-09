module.exports = {
  darkMode: 'class',  // Make sure it's set to 'class' for manual class switching
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Ensure this includes all necessary files where Tailwind will be used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
