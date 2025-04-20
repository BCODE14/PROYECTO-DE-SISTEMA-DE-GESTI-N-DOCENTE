/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'lin':'#eff6ff',
      'blue': '#1e3a8a',
      'bluelit':'#bfdbfe',
      'blueli':'#eff6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white':'#f8fafc',
      'red':'#f472b6',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',}
    },
    fontFamily: {
     // sans: ['Graphik', 'sans-serif'],
     // serif: ['Merriweather', 'serif'],
     fon:['font-sans'],

    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
  },
  plugins: [],
}
}
