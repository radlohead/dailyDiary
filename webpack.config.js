const webpack = require('webpack');

module.exports={
    entry: './src/Main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
        },{
            test: /\.(jpg|png|svg)$/,
            loader: 'url-loader'
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets:['es2015','es2016']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor:{
                warnings: false
            }
        })
    ],
    devServer: {
        inline: true,
        port: 3000,
        contentBase: __dirname+'/output',
        historyApiFallback: true
    }
}