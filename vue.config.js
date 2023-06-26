const {defineConfig} = require('@vue/cli-service')
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appId = 'digiq_t'

module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV !== 'development' ? '/digiq-track/' : '/',
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(process.cwd(), 'public'),
                        to: path.resolve(process.cwd(), 'docs'),
                        globOptions: {
                            ignore: ['**/index.html'],
                        },
                    },
                    {
                        from: path.resolve(process.cwd(), appId, 'public'),
                        to: path.resolve(process.cwd(), 'docs'),
                        globOptions: {
                            ignore: ['**/index.html'],
                        },
                    },
                ],
            }),
        ],
    }

})
