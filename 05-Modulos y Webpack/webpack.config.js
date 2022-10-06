const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");



module.exports = {
    mode: 'development',

    output: {
        clean: true // limpia dist
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
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App', // title de la app
            filename: 'index.html', // nombre del file de html
            template: './src/index.html'// archivo de cual se basa
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        })
    ],
}