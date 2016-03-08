# Hexo Html Min-beautify

Minify and Beautify HTML files with [html-minifier](https://github.com/kangax/html-minifier) and [js-beautify](https://github.com/beautify-web/js-beautify).

## Installation

``` bash
$ npm install hexo-html-min-beautify --save
```

## Options

`_config.yml`:

``` yaml
# Hexo Html Min-beautify
html_min_beautify:
  enable: true
  exclude:
  beautify:
    'indent_inner_html': false
    'indent_with_tabs': false
    'indent_size': 2
    'indent_char': ' '
    'brace_style': 'collapse'
    'indent_scripts': 'normal'
    'max_preserve_newlines': 0
    'end_with_newline': true
    'extra_liners': false
    # More Options (https://github.com/beautify-web/js-beautify/blob/master/README.md#css--html)
  minify:
    'collapseWhitespace': true
    'preserveLineBreaks': true
    'minifyJS': true
    'minifyCSS': true
    # More Options (https://github.com/kangax/html-minifier#options-quick-reference)

```

Check out [html-minifier](https://github.com/kangax/html-minifier#options-quick-reference) and [js-beautify](https://github.com/beautify-web/js-beautify/blob/master/README.md#css--html) for more options.
