import i18n from './config/i18n'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Paul Haddou',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/fonts',
    '~/assets/styles/colors',
    '~/assets/styles/grid',
    '~/assets/styles/typography',
    '~/assets/styles/animations',
    '~/assets/styles/global'
  ],
  styleResources: {
    scss: ['./assets/styles/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'fr',
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'fr',
            name: 'Français'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  server: {
    host: '0',
    port: '3000'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isClient, loaders: { vue } }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        vue.transformAssetUrls.video = ['src', 'poster']
      }
    },
    loaders: {
      sass: {
        implementation: require('sass')
      },
      scss: {
        implementation: require('sass')
      },
      vue: {
        transformAssetUrls: {
          video: 'src',
          source: 'src',
          object: 'src',
          embed: 'src'
        }
      }
    }
  }
}
