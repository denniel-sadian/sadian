import pkg from './package'

export default {
  mode: 'spa',

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
        content: process.env.PROFILE_PIC || 'https://avatars2.githubusercontent.com/u/30485137?s=460&u=b5a13c4c462ef5aac3af7a68cb33097eb2772f42&v=4'
      },
      {
        hid: 'preview_img',
        property: 'og:image',
        content: process.env.PROFILE_PIC || 'https://avatars2.githubusercontent.com/u/30485137?s=460&u=b5a13c4c462ef5aac3af7a68cb33097eb2772f42&v=4'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito'
      }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/209b41c676.js',
        crossorigin: 'anonymous'
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
  },

  /*
   ** Env
   */
  env: {
    profilePic: process.env.PROFILE_PIC || 'https://avatars2.githubusercontent.com/u/30485137?s=460&u=b5a13c4c462ef5aac3af7a68cb33097eb2772f42&v=4'
  }
}
