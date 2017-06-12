//webpack.config.js
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', __dirname + '/views/main.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        //loaders
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.scss$/,
            loader: "style!css!sass"
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(), //HotModuleReplacement
    ],

    devServer: {
        contentBase: './',
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8080,
        process: true,
    }
};