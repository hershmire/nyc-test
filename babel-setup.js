process.env.BABEL_ENV = 'test';
const babelOptions = require('./.babelrc.js');
require('babel-core/register')(babelOptions);
