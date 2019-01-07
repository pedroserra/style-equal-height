const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'style-equal-height': './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'styleEqualHeight',
        libraryTarget: 'window'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
