// This file is used to configure webpack to build the library
  const path = require('path');

module.exports = {
  entry: './src/news-api.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.ts',
    path: path.resolve(__dirname, 'dist'),
		library: 'lib',
		libraryTarget: 'umd',
		globalObject: 'this',
  },
};