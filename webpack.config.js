const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/client',
  output: {

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
