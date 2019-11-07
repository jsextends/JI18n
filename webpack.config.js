const path = require('path')
module.exports = {
    mode: "production",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    entry: './src/I18n.js',
    output: {
        filename: 'j19-I18n.min.js',
        path: path.resolve(__dirname, 'lib'),
        library: 'J19',
        libraryTarget: 'umd'
    }
}