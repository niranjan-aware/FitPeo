export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryIndigo': '',
        'secondaryIndigo': '',
        'bgIndigo': '',
        'primaryTeal': '',
      },
    },
    screens: {
      'xs':'300px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
}
