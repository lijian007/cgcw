// next.config.js
const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  // optional
  // modifyVars: { '@primary-color': '#04f' },
  // optional
  // lessVarsFilePath: './src/styles/variables.less',
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack (config) {
    return config
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['zh', 'en'],
    defaultLocale: 'zh'
  }
})