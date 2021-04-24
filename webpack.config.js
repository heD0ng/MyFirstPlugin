const demoWebpackPlugin= require('./demo-webpack-plugin')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const { resolve } = path

module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    // './src/index.js',
    // 等于{main:'./src/index.js'}

    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // './dist/main.js',

    mode: 'development',
    module: {
        rules: [
    
        ]
    },
    plugins: [
        // 清除打包的文件夹
        new CleanWebpackPlugin(
            ['dist']
        ),
        new demoWebpackPlugin()
    ],
}