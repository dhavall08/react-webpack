const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: "/assets/",
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        // exclude: [path.resolve('node_modules')],
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // extract css or JS modules into a separate file
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader', // interprets @import and url() like import/require() and will resolve them, translates CSS into CommonJS
          'postcss-loader',
          'sass-loader', // loads a Sass/SCSS file and compiles it to CSS.
        ]
      }
    ]
  }
}