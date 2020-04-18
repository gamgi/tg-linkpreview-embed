const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const constants = require('./constants');

module.exports = {
  mode: 'development',
  entry:  {
    main: ['./src/index.ts', './style.css']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/i,
        use: 'file-loader',
        include: [path.resolve(__dirname, 'src/assets')],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: [path.resolve(__dirname, 'style.css')],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new HtmlWebpackPlugin({...constants}),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000,
  },
};
