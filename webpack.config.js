const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const constants = require('./constants');

module.exports = {
  mode: 'production',
  entry:  {
    main: ['./src/index.ts', './style.css']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|vs|fs)$/,
        use: 'ts-shader-loader',
        include: [path.resolve(__dirname, 'src/shader')],
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
    new HtmlWebpackPlugin({...constants, minify: false}),
    new MiniCssExtractPlugin(),
    new CopyPlugin([
      { from: './src/assets/placeholder.png', to: constants.thumbnail },
      { from: "oembed.json", to: "oembed.json", transform: populateJson }
    ])
  ]
};

function populateJson(buffer, path) {
  var data = JSON.parse(buffer.toString());

  // oEmbed format
  // https://oembed.com/
  data.title = constants.title;
  data.width = constants.canvasWidth;
  data.height = constants.canvasHeight;
  data.thumbnail_url = constants.thumbnailURL;
  data.thumbnail_width = constants.thumbnailWidth;
  data.thumbnail_height = constants.thumbnailHeight;
  data.html = `<div class="tg-embed-wrapper">\n<iframe allowvr="" title="" webkitallowfullscreen="true" width="${constants.canvasWidth}" src="${constants.URL}" class="" allow="autoplay; fullscreen; vr" frameborder="0" mozallowfullscreen="true" height="${constants.canvasHeight}" onmousewheel="" allowfullscreen=""></iframe></div>`;

  dataJSON = JSON.stringify(data, null, 2);
  return dataJSON;
}