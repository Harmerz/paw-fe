/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ijo1: '#457D00',
        ijo2: '#C6C736',
        ijo3: '#96B125',
        ijo4: '#F4FDE8',
        'orange-tumbas': '#FEA938',
        'kuning-tumbas': '#FCEC9A',
        'merah-tumbas': '#B12525',
      },
    },
  },
  plugins: [],
}
