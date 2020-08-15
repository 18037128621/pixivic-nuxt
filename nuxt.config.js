/*
 * @Author: Dongzy
 * @since: 2020-06-24 19:43:46
 * @lastTime: 2020-06-26 14:52:58
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\nuxt.config.js
 * @message:
 */

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'content-language', content: `zh-cn` },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:site_name',
        content: 'pixivic',
      },
      {
        property: 'og:url',
        content: 'https://pixivic.com/',
      },

      {
        property: 'og:description',
        content: '提供Pixiv插画排行榜的浏览与下载以及热门排序的高级会员搜索',
      },
      {
        property: 'og:title',
        content: '插画交流网站 [pixivic]',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  // css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '@/plugins/api/index.js', ssr: true }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: ['cn', 'en'],
        defaultLocale: 'cn',
        vueI18n: {
          fallbackLocale: 'cn',
          messages: {
            en: {
              greeting: 'Hello world!',
            },
            cn: {
              greeting: '诺好',
            },
          },
        },
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
