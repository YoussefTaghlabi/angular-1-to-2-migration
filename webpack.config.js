const path = require('path')

module.exports = {
    entry: ['./public/app.ts'],
    externals: {
        'angular': 'angular',
        'toastr': 'toastr',
        'jquery': 'jquery'
    },
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}