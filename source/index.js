import { inspect } from 'util'

const phrase = [ ...['Hello'], ...['World']].join(' ')

function work(version = '') {
	console.log(`Node ${inspect(version)} says: "${phrase}".`)
}

work(process.version)

// Demonstrate the differences in compiled output by using the following features:
// modules: no native support
// template strings: >= node 4
// array spread: >= node 5
// default parameters: >= node 6
 