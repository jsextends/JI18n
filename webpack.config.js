const path = require('path')
const process = require("process")
module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    entry: './src/I18n.js',
    output: {
        filename: process.env.NODE_ENV === "production" ? "ji18n.min.js" : "ji18n.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    }
}