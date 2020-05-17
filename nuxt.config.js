import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'twitter-card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter-preview_img',
        name: 'twitter:image',
        content: 'https://sadian.herokuapp.com/icon.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/all.css' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ffeb3b' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/w3.css', '~/assets/css/transitions.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [['vue-scrollto/nuxt', { duration: 300 }]],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
