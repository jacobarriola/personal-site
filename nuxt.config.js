import contentful from './plugins/contentful'

export default {

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    'nuxt-webfont-loader'
  ],

  webfontloader: {
    google: {
      families: [
        'PT+Sans:700',
        'Lato:300,700'
      ]
    }
  },

  markdownit: {
    injected: true,
    html: true
  },

  generate: {
    async routes () {
      try {
        const { items } = await contentful.getEntries({
          content_type: 'blogPost'
        })

        return items.map(entry => {
          return {
            route: `/post/${entry.fields.slug}`,
            payload: entry
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Jacob Arriola',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website of Jacob Arriola, full stack web developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/css/main.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00F' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.node = {
        fs: 'empty'
      }
    }
  }
}
