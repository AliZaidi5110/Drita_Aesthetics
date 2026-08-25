/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF0',
          100: '#FAF4D3',
          200: '#F3E7A5',
          300: '#E5C978',
          400: '#DCBD54',
          500: '#D4AF37',
          600: '#B89326',
          700: '#917117',
          800: '#6E5311',
          900: '#4D3809',
        },
        bronze: {
          100: '#F5ECE1',
          200: '#E8D5C1',
          300: '#DBBEA1',
          400: '#CEA781',
          500: '#C5A880',
          600: '#A38761',
          700: '#816844',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F5EFE6',
          300: '#EBE3D5',
          400: '#DFD5C3',
          500: '#D2C4AE',
        },
        charcoal: {
          700: '#3D3835',
          800: '#2A2725',
          900: '#1A1817',
          950: '#121110',
        },
        rose: {
          50: '#FEF8F6',
          100: '#FCEEE9',
          200: '#F8DDD5',
          300: '#F2BEB1',
          400: '#E79D8E',
          500: '#D98A7B',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #D4AF37 0%, #F5EFE6 50%, #C5A880 100%)',
        'dark-luxury': 'linear-gradient(180deg, #1A1817 0%, #2A2725 100%)',
      },
    },
  },
  plugins: [],
};
