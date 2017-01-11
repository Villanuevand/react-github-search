

module.exports = {
	entry: './app/app-client.js',
	devServer: {
		inline: true,
		port: 3333,
		contentBase: "public/",
		historyApiFallback: {
			index: 'index.html'
		}
	},
	output: {
		filename: './public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}
