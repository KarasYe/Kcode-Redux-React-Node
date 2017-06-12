//webpack.config.js
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map', //Source Maps,这里选择eval-source-map
    entry: ['webpack/hot/dev-server', __dirname + '/views/main.js'],
    output: {
        path: __dirname + '/public/build',
        filename: 'bundle.js'
    },

    module: {
        //loaders加载器
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
        new webpack.HotModuleReplacementPlugin() //HotModuleReplacement
    ],
};