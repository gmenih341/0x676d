const webpack = require('webpack');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                },
            }]
        }, {
            test: /\.(jp(e)?g|png)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'images/',
                },
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: true,
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: "[id].css"
        }),
    ],
};