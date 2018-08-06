'use strict';

const path = require('path');

module.exports = {
  // Allow non-promoted modules to be transpiled
  ignore: [
    // Ignore promoted modules
    path.join(process.cwd(), 'node_modules'),
  ],
  presets: [
    'babel-preset-react',
    ['babel-preset-env', {
      targets: {
        browsers: [
          'last 2 versions'
        ]
      }
    }]
  ],
  env: {
    test: {
      plugins: [
        [
          require.resolve('babel-plugin-istanbul'),
          {
            exclude: [
              '**/test-node/**',
              '!src/**/node_modules/**',
            ]
          }
        ]
      ]
    }
  },
  plugins: [
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-object-rest-spread',
  ]
};
