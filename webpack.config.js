module.exports = {
	entry: "./index.js",
	output: {
		path: "./static",
		filename: "bundle.js",
		publicPath: "/static/"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel",
			include: __dirname,
			query: {
				presets: [
					'es2015',
					'react',
					'react-hmre'
				]
			}
		}, {
			test: /\.less$/,
			loader: "style!css!less"
		}]
	}
}