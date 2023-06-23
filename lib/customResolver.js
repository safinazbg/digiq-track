const path = require('path');
const fs = require('fs');

const appId = 'digiq_t'

function customResolver(alias) {
    const defaultPublicPath = path.resolve(__dirname, 'public');
    const modulePublicPath = path.resolve(__dirname, appId, 'public');

    const fileExistsInModule = fs.existsSync(path.resolve(modulePublicPath, alias));
    if (fileExistsInModule) return modulePublicPath;

    return defaultPublicPath;
}


module.exports = customResolver;
