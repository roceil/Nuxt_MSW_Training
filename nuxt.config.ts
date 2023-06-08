// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config()
export default ({
  css: ['~/assets/css/global.css'],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  }
})
