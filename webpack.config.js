// webpackでlibClient-tsをビルドする際に用いるオプションを記述したもの
const path = require('path');

module.exports = {
    mode: 'production',
    context: __dirname + '/Src',
    entry: __dirname + '/Src/QuickMPC.ts',
    output: {
        filename: 'Bundle.js',
        path: path.resolve(__dirname, 'Dist'),
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
              test: /\.(js|ts)$/,
              include: [
                path.resolve(__dirname, "Src")
              ],      
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
        modules: ["node_modules"],
        extensions: ['.ts', '.js']
    }
}