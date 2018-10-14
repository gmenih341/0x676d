const webpack = require('webpack');
const {resolve, join} = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

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
        host: '0.0.0.0',
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
                    options: {
                        minify: true,
                    }
                },
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /.+\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            exclude: [/assets/],
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                },
            }]
        }, {
            test: /\.(jp(e)?g|png|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'assets',
                },
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: false,
                html5: true,
            },
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: "[name].css"
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(join(__dirname, 'src/**/*'),  { nodir: true }),
        }),
    ],
};