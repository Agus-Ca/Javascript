const HtmlWebpack = require('html-webpack-plugin');


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
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App', // title de la app
            filename: 'index.html', // nombre del file de html
            template: './src/index.html'// archivo de cual se basa
        })
    ],
}