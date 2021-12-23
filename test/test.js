const assert = require('chai').assert;
const stairCase = require('../src/utils/stairCase');

describe('stairCase', function () {
  it('Should print a stair of #, its rungs depend of the number that we pass it', function () {
    assert.equal(stairCase(5), 5);
  });
});