module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // babel-plugin-import插件：局部注册elementUi-plus组件时自动引入对应css
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/theme-chalk/${name}.css`
        }
      }
    ]
  ]
}
