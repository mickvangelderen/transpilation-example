'use strict';

var _util = require('util');

var phrase = ['Hello'].concat(['World']).join(' ');

function work() {
  var version = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  console.log('Node ' + (0, _util.inspect)(version) + ' says: "' + phrase + '".');
}

work(process.version);

// Demonstrate the differences in compiled output by using the following features:
// modules: no native support
// template strings: >= node 4
// array spread: >= node 5
// default parameters: >= node 6