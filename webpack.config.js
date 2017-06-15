//webpack.config.js
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.jade$/,
            loader: 'jade-loader'
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(), //HotModuleReplacement
        new HtmlWebpackPlugin({
            template: 'views/index.jade'
        })
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