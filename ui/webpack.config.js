const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '../src/main/resources/static/'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../src/main/resources/static/'),
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            //    include: ASSETS_FOLDER,
                loader: 'file-loader?name=assets/[name].[ext]'
            }
        ]
    },
};