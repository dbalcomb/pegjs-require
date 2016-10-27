var fs  = require('fs');
var peg = require('pegjs');

var options = {
	cache: false,
	output: "source",
	optimize: "speed",
	trace: false,
	plugins: []
};

require.extensions['.pegjs'] = function (module, filename) {
	var source = peg.generate(fs.readFileSync(filename, 'utf8'), options);
	return module._compile("module.exports = " + source + ";\n", filename);
}

module.exports = peg;
