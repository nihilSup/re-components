var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'generated'),
        filename: 'index.js',
        library: 're-components.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react': path.resolve(path.join(__dirname, 'node_modules', 'react')),
            'react-dom': path.resolve(path.join(__dirname, 'node_modules', 'react-dom')),
            'material-ui': path.resolve(path.join(__dirname, 'node_modules', 'material-ui')),
        },
    },
    externals: [
      'react',
      'react-dom'
    ],
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
	       }
        ]
    },
    devServer: {
        noInfo: false,
        quiet: false,
        lazy: false,
        watchOptions: {
            poll: true
       }
    }
}