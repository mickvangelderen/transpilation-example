/*
Do not use this build script directly for your projects, it doesn't
handle many things such as discovering files recursively, creating
folders and asynchronous file system operations. 
*/

const assert = require('assert')
const { join } = require('path')
const fs = require('fs')
const babel = require('babel-core')

function build({ inputFolderPath, outputFolderPath, options }) {
	assert.equal(typeof inputFolderPath, 'string')
	assert.equal(typeof outputFolderPath, 'string')
	fs.readdirSync(inputFolderPath)
	.forEach(file => {
		transpile({
			inputFilePath: join(inputFolderPath, file),
			outputFilePath: join(outputFolderPath, file),
			options
		})	
	})
}

function transpile({ inputFilePath, outputFilePath, options }) {
	const contents = fs.readFileSync(inputFilePath)
	const result = babel.transform(contents, options)
	fs.writeFileSync(outputFilePath, result.code)
}

[ 'es2015', 'es2015-node4', 'es2015-node5', 'es2015-node6' ]
.forEach(preset => {
	build({
		inputFolderPath: join(process.cwd(), 'source'),
		outputFolderPath: join(process.cwd(), `build/${preset}`),
		options: { presets: [ preset ] }
	})
})
