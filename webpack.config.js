const path = require('path')

module.exports = {
  externals: {
    'node:url': 'commonjs url',
  },
  entry: './lib.ts',
  devtool: 'inline-source-map',
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: {
      type: 'commonjs',
    },
  },
}
