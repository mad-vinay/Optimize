var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname),
  entry: [
          './index.js',
         ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react',
                    'es2016',
                    'stage-1',
                   ],
          plugins: ['transform-decorators-legacy'],
        },
      },
      {
        test: /\.scss?$/,
        loaders: ['style-loader', 'css-loader?importLoaders=2&module&localIdentName=[path][name]-[local]&-autoprefixer&-minimize', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
  },
  plugins: [
	  new HtmlWebpackPlugin({
      template: './index.ejs',
    }),
  ],
};
