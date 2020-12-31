
const polyPkgs = ['@cdr0/active-development', '@cdr0/grumpy'];

module.exports = require('./get-local-polyrepo')(__dirname, {polyPkgs})('@cdr0/grumpy')   || require('@cdr0/grumpy');
