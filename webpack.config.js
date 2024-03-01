const path = require('path');

module.exports = {
  entry: './index.js', // Your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'index.js' // Output file
  },
  target: 'node', // Target environment
  mode: 'production', // Could be 'development' for debugging purposes
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
    extensions: ['.js'],
  }
};
