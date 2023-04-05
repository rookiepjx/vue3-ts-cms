const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}
const ip = 'http://codercba.com:5000'
module.exports = defineConfig({
  outputDir: './build',
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: ip,
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
      // '/api': {
      //   target: 'http://httpbin.org/',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '/'
      //   }
      // }
    }
  }
})
