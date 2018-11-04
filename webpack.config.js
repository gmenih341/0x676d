const {resolve, join} = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: resolve('./dist'),
        filename: '[name]-[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
                test: /\.json5$/,
                loader: 'json5-loader',
            },
        ],
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
            chunkFilename: '[name].css',
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(join(__dirname, 'src/**/*'), {
                nodir: true,
            }),
        }),
        new FaviconsWebpackPlugin({
            logo: './src/assets/icon.png',
            prefix: 'favicons/[hash]',
            inject: true,
            title: 'Gregor Menih',
        }),
        new DashboardPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
