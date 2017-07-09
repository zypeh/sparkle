module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Plugins
   */
  plugins: [
    '~plugins/swiper-plugin.js'
  ],
  /**
   * CSS [Spectre]
   */
  css: [
    { src: '~assets/spectre/spectre.less', lang: 'less' },
    { src: '~assets/spectre/spectre-exp.less', lang: 'less' },
    { src: '~assets/spectre/spectre-icons.less', lang: 'less' },
    { src: '~assets/tex/color.less', lang: 'less' },
    '~assets/icon/style.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
/*    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/

  }
}
