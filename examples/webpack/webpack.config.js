var webpack = require('webpack');
var path = require('path');

// var ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
    context: path.join(__dirname),
    // devtool: "inline-sourcemap",
    entry: "./src/main.js",
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }]
    },
    output: {
        path: __dirname,
        filename: "build/main.min.js"
    },
    watch: true,
    plugins: [
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: true,
        //     sourcemap: false
        // })
    ],
};
