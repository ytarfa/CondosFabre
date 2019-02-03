const webpack = require('webpack');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: ['./client/index.js'],
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
                            // includePaths: ["absolute/path/a", "absolute/path/b"]
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [new UglifyJsPlugin({
            sourceMap: true
        })]
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.scss$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })
    ],
    mode: 'production'
};