const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [['env', {
            targets: {
              modules: false,
            },
          }]],
        },
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  context: __dirname,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    historyApiFallback: true,
    hot: false,
    https: false,
    noInfo: false,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
  ],
  devtool: 'cheap-eval-source-map',
};
