const exclude = /node_modules/;

module.exports = [
  {
    enforce: 'pre',
    test:    /\.jsx$/,
    exclude: exclude,
    loader:  'eslint-loader'
  },
  {
    test:    /\.jsx?$/,
    exclude: exclude,
    loader:  'babel-loader'
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)(\??\#?v=[.0-9]+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]',
  }
];
