const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser       = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',

    output: {
        clean: true, // limpia dist
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles\.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App', // title de la app
            filename: 'index.html', // nombre del file de html
            template: './src/index.html'// archivo de cual se basa
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' }
            ]
        })
    ],
}