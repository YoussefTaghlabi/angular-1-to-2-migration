const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: __dirname + '/public/app.ts',
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
            // { test: /vendor\/.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js')
        // new webpack.ProvidePlugin({
        //     $: "jQuery",
        //     jQuery: "jQuery",
        //     "windows.jQuery": "jQuery"
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require', 'angular']
        //     }
        // })
    ]
}