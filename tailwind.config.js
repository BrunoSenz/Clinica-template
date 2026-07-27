/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nude: {
          DEFAULT: '#F2E7DA',
          light: '#FAF5EE',
          dark: '#E6D5C0',
        },
        cream: '#FFFEFC',
        gold: {
          light: '#E3C88F',
          DEFAULT: '#B8934C',
          dark: '#8C6B2E',
        },
        ink: {
          DEFAULT: '#2B2420',
          soft: '#5C5148',
          faint: '#8A7F73',
        },
        plum: {
          DEFAULT: '#3E2440',
          soft: '#5B3B60',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        editorial: ['"Playfair Display"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(43, 36, 32, 0.25)',
        glass: '0 8px 32px rgba(184, 147, 76, 0.15)',
        gold: '0 10px 40px -10px rgba(184, 147, 76, 0.45)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E3C88F 0%, #B8934C 50%, #8C6B2E 100%)',
        'nude-radial': 'radial-gradient(circle at 30% 20%, #FAF5EE 0%, #F2E7DA 60%, #E6D5C0 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
