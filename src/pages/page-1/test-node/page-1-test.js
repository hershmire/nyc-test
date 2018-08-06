const assert = require('assert');
const fileToTest = require('../page-1.js');

describe('Page 1', function() {
  it('should print it\'s location', function() {
    assert(fileToTest.location() === 'src/pages/page-1/page-1.js');
  })
});
