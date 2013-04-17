var fs  = require('fs');
var peg = require('pegjs');

require.extensions['.pegjs'] = function (module, filename) {
	module.exports = peg.buildParser(fs.readFileSync(filename, 'utf8'));
}

module.exports = peg;
