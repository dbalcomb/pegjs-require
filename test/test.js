var assert = require('assert');

describe('Module', function () {
  it('should return the PEG.js object', function () {
    var peg = require('../lib/index');
    assert.ok(typeof peg.parse, 'function');
  });

  it('should parse the grammar successfully', function () {
    var peg = require('../lib/index');
    var parser = require('./fixtures/arithmetics.pegjs');
    assert.equal(typeof parser.parse, 'function');
  });

  it('should calculate the correct result', function () {
    var peg = require('../lib/index');
    var parser = require('./fixtures/arithmetics.pegjs');
    assert.equal(parser.parse('2 * (3 + 4)'), 14);
  });
});
