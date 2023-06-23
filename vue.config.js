const {defineConfig} = require('@vue/cli-service')
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const fs = require('fs');
const customResolver = require("./lib/customResolver");

const appId = 'digiq_t'

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@public': customResolver('@public')
            }
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(process.cwd(), 'public'),
                        to: 'dist',
                        globOptions: {
                            ignore: ['index.html']
                        }
                    },
                    {
                        from: path.resolve(process.cwd(), appId, 'public'),
                        to: 'dist'
                    }
                ]
            })
        ]
    },
    devServer: {
        onBeforeSetupMiddleware(devServer) {
            devServer.app.get('/@public/*', (req, res) => {
                console.log(5532, req.url);
                const requestedFile = req.url.replace(/^\/@public\//, '');
                const publicPath = path.resolve(__dirname, 'public');
                const digiqPublicPath = path.resolve(__dirname, appId, 'public');
                let fileToServe;

                if (fs.existsSync(path.resolve(digiqPublicPath, requestedFile))) {
                    fileToServe = path.resolve(digiqPublicPath, requestedFile);
                } else if (fs.existsSync(path.resolve(publicPath, requestedFile))) {
                    fileToServe = path.resolve(publicPath, requestedFile);
                } else {
                    res.status(404).send('File not found');
                    return;
                }

                res.sendFile(fileToServe);
            });
        },
    },
})
