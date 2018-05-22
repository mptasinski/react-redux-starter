const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?minimize&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded!postcss-loader'
  }),
  exclude: ['node_modules']
});

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    publicPath: './',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    pathinfo: true
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
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      warnings: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../reports/bundle-analyzer-report.html',
      openAnalyzer: false,
      defaultSizes: 'gzip'
    })
  ]
};
