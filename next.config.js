const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/src/assets',
    },
});
