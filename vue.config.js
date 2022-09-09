/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/sass/home/_home.scss";`
      },
    },
  },
};
