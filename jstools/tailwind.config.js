module.exports = {
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
  purge: {
      enabled: false, //true for production build
      content: [
          '../**/templates/*.html',
          '../**/templates/**/*.html'
      ]
  },
  theme: {
      extend: {
        colors:{
          primary:'#060b26',
          secondary:'#101522',
        },
      },
      container:{
        center:true,
        padding:'1rem',
        screens:{
          lg:'1124px',
          xl:'1124px',
          '2xl':'1124px',
        },
      },
  },
  variants: {},
  plugins: [],
}