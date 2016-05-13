/*
This code automatically requires the right code depending on
the node version. 
*/

var match = /^v(\d+)\.\d+\.\d+$/.exec(process.version)

if (match === null) throw new Error('Unknown node version: ' + process.version + '.')

var major = +match[1]

var folder = major < 4
  ? './build/es2015'
  : './build/es2015-node' + major

module.exports = require(folder)
