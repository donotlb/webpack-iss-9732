const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    app: './entry.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map'
    }),

    new webpack.HotModuleReplacementPlugin() // !!!!!!! remove this line, the warning will not display
  ]
}
