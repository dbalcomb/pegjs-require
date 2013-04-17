PEG.js Require Extension
========================

This is an extension that enables PEG.js grammars to be loaded via `require`.

It is simply a shortcut to:

	require('pegjs').buildParser(fs.readFileSync(filename, 'utf8'));

# Install

Install via npm:

    npm install pegjs-require

# Use

Simply require this module:

    require('pegjs-require');

And then require any PEG.js grammar:

	var parser = require('./grammar.pegjs');

Then use the parser as normal:

	parser.parse("Hello World!");

# Bonus

This module also exports PEG.js via `module.exports` so you should only have to require this one module.
