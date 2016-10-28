const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: __dirname + '/public/app.module.ng1.ts',
        vendors: ['angular', 'angular-route', 'toastr', 'jquery']
    },
    output: {
        path: __dirname + '/build/',
        filename: 'app.bundle.js'
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js')
    ]
}