'use strict';
const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

loaders.push({
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader', 'postcss-loader'],
  exclude: ['node_modules']
});

module.exports = {
  entry: {
    'main': [
      'react-hot-loader/patch',
      './src/index.jsx'
    ]
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    loaders
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
};
