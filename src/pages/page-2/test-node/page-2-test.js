const assert = require('assert');
const fileToTest = require('../page-2.js');

describe('Page 2', function() {
  it('should print it\'s location', function() {
    assert(fileToTest.location() === 'src/pages/page-2/page-2.js');
  })
});
