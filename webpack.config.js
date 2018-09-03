const webpack = require('webpack');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {webpack.Configuration} */
module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts'],
    },
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        port: 42069,
    },
    output: {
        path: resolve('./dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }, {
            test: /\.(sass|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        }, {
            test: /\.clit$/,
            use: [
                {
                    loader: resolve('./webpack/cli-text.loader.js'),
                },
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};