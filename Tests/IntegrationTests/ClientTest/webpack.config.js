// webpackでlibClient-tsおよびクライアントテスト用のコードをビルドする際に用いるオプションを記述したもの
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './Client.ts'],
    output: {
        path: path.resolve(__dirname, 'Dist'),
        filename: 'Bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(ts)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-typescript']
                }
              }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}