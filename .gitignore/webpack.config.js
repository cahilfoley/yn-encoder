const webpack = require('webpack')
const path = require('path')


module.exports = {

	entry: {
		encoder: './js/encoder.js'
	},

	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[id].js',
		path: path.join(__dirname, 'dist')
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]

}