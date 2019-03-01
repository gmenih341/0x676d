const {resolve, join} = require('path');
const glob = require('glob');
const ip = require('ip');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const {platform} = process;

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    output: {
        path: resolve('./dist'),
        filename: '[name]-[hash].js',
    },
    devServer: {
        host: platform === 'win32' ? ip.address() : '0.0.0.0',
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            minify: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /.+\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
            },
            {
                test: /\.json5$/,
                loader: 'json5-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: false,
                html5: true,
            },
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: '[name].css',
        }),
        new FaviconsWebpackPlugin({
            logo: './src/assets/icon.png',
            prefix: 'favicons/[hash]',
            inject: true,
            title: 'Gregor Menih',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
