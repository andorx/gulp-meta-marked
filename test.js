'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var markdown = require('./index');

it('should compile Markdown to HTML', function (cb) {
	var stream = markdown();

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), '<p><em>foo</em></p>\n');
		cb();
	});

	stream.write(new gutil.File({
		contents: new Buffer('*foo*')
	}));
});