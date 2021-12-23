const assert = require('chai').assert;
const stairCase = require('../src');

describe('stairCase', function () {
  it('Should print a stair of #, its steps depend of the number that we pass it', function () {
    assert.equal(stairCase(5), 5);
  });
});