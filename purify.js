const purify = require('purifycss')
const content = ['**/js/encoder.js', '**/encodinator.html']
const css = ['**/css/*.css']

const options = {
	output: './dist/encoder.css',
	minify: true
}

purify(content, css, options)