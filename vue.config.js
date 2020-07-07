const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin')
module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  publicPath: '/',
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  configureWebpack: {
    plugins: [
      new HtmlWebpackInlinePlugin({
        compress: false
      })
    ]
  },
  css: {
    loaderOptions: {
      // postcss: {
      //   plugins: [
      //     require('postcss-pxtorem')({
      //       rootValue: 16, // 换算的基数
      //       selectorBlackList: [], // 忽略转换正则匹配项
      //       propList: ['*']
      //     })
      //   ]
      // }
    }
  }
}
