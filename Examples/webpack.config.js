const webpack = require('webpack');

module.exports = {
  entry: {
      'standard/client': './Standard/client.js',
      'standard/service': './Standard/service.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist/build',
    filename: '[name].js'
  }
};