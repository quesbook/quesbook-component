/**
 * Created by az on 2017/7/11.
 */
module.exports = {
    devtool: 'source-map',
    entry: __dirname+'/src/qb-component/index.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
        publicPath: ''
    },
    devServer: {
        contentBase:  __dirname+"/dist",
        compress: true,
        port: 5000,
        hot: true,
        lazy: true
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                // loader: 'url-loader?limit=819200'
                loader: 'file-loader?name=[name].[ext]&outputPath=/assets/image/',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:['es2015','react']
                    }
            },
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    }
};
