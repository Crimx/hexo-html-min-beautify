'use strict';

var beautify = require('js-beautify').html;
var minify = require('html-minifier').minify;
var minimatch = require('minimatch');

var defaults = {
  enable: true,
  exclude: [],
  beautify: {
    indent_inner_html: false,
    indent_with_tabs: false,
    indent_size: 2,
    indent_char: ' ',
    brace_style: 'collapse',
    indent_scripts: 'normal',
    max_preserve_newlines: 0,
    unformatted: [],
    end_with_newline: true,
    extra_liners: false
  },
  minify: {
    collapseWhitespace: true,
    preserveLineBreaks: true,
    minifyJS: true,
    minifyCSS: true
  }
};

module.exports = function (str, data) {
  var options = this.config.html_min_beautify ? this.config.html_min_beautify : defaults;
  var result;
  var path = data.path;
  var exclude = options.exclude || [];

  if (exclude && !Array.isArray(exclude)) exclude = [exclude];

  if (path && exclude && exclude.length) {
    for (var i = 0, len = exclude.length; i < len; i++) {
      if (minimatch(path, exclude[i])) return str;
    }
  }

  if (options.enable === true || typeof options.enable === 'undefined') {
    result = beautify(minify(str, options.minify || {}), options.beautify || {});
  } else {
    result = str;
  }

  return result;
};
