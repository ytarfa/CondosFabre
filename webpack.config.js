require("babel-polyfill");
const webpack = require('webpack');
const path = require("path");


module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "client.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react", "stage-0"],
            plugins: ["transform-class-properties", "transform-decorators-legacy", "react-html-attrs"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
          loader: "style-loader"
          }, {
          loader: "css-loader"
          }, {
          loader: "sass-loader",
            options: {
                includePaths: ["absolute/path/a", "absolute/path/b"]
            }
          }
        ]
      }
    ]
  },
  mode: 'development'
};