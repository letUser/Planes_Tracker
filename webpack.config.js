const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    watchOptions: {
        ignored: /node_modules/
    },
    entry: {
        main: './src/DOM.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
};