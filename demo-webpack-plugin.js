
class demoWebpackPlugin {
    constructor() {
        console.log('初始化');
    }
    apply(compiler) {
        compiler.hooks.compile.tap('aaa', (compilation) => {
            console.log('tap钩子');
        })
        compiler.hooks.emit.tapAsync('bbb', (compilation, next) => {
            compilation.assets['index.md'] = {
                source: function () {
                    return '你能看见我,都是webpack的功劳'
                },
                size: function () {
                    return 25
                }
            }
            next()
        })
    }
}

module.exports = demoWebpackPlugin
// 插件的本质就是类，但是在类中会创建compiler实例，
// 且有生命周期的概念，我们就是需要在不同的生命周期进行不同的操作