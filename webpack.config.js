const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

const sassLoaders = [
  'css-loader',
  // 'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname, filename: 'bundle.js'
  },
  devServer: { // opciones para el servidor de desarrollo
    inline: true, // para que se recargue automÃ¡ticamente cuando cambie un archivo
    port: "8000"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'angular']
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: ExtractTextPlugin.extract('css!sass?sourceMap')
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.sass', 'scss', 'css'],
    root: [path.join(__dirname, './src')]
  }
};
