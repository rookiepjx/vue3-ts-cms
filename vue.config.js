const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}
module.exports = defineConfig({
  outputDir: './build',
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://httpbin.org/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
})
