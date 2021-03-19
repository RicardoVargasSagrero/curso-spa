const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        /* Valor que vamos a filtrar de los archivos que estamos utilizando */
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  },
  plugins:  [
    new HtmlWebpackPlugin(
      {
        inject: true,
        /* Donde se encuentra el temple base */
        template: './public/index.html',
        filename: './index.html'
      }
    ),
    new copyWebpackPlugin({
      patterns: [{
        from: './src/styles/styles.css',
        to: ''
      }]
    })
  ]
};
