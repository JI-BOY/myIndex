const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8080,

  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/global.scss";`
      }
    }
  },
})
