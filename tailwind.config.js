/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'titleFont': ['Staatliches'],
        'textFont': ['DM Sans'],
      },
      colors:{
        'primary':'#240046',
        'fontWhite':'#F0DCF0',
        'fontPurple':'#E0AAFF',
        'buttonBlack': '#19111E',
        'inputColor':'#878383',
        'activeLigthBlue':'#6FE9D3',
        'inactiveLigthBlue':'#00CED1',
        'linesColors':'#5A189A',
        'hoverColor':'#E0AAFF',
        'hoverTextColor':'#19111E',
      },
    
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      extend: {
        scale: {
          '200': '2.00',
        },
      }
    },
  },
  plugins: [],
}
