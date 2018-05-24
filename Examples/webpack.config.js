const webpack = require('webpack');

module.exports = {
  entry: {
      'standard/client1': './Standard/client1.js',
      'standard/client2': './Standard/client2.js',
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