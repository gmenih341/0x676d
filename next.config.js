const withTypescript = require('@zeit/next-typescript');
const withTM = require('next-transpile-modules');

module.exports = withTypescript(
  withTM({
    transpileModules: ['react-spring', '@babel/runtime']
  })
);