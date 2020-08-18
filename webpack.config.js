const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [{
			test: /\.css$/,
			loader:['style-loader', 'css-loader']
		}, {
			test: /\.scss$/,
			loader: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.less$/,
			use: [{
				loader: 'style-loader',
			}, {
				loader: 'css-loader', // translates CSS into CommonJS
			}, {
				loader: 'less-loader', // compiles Less to CSS
				options: {
					lessOptions: {
						modifyVars: getThemeVariables({
							dark: true, // 开启暗黑模式
							compact: true, // 开启紧凑模式
						}),
						javascriptEnabled: true,
					},
				},
			}]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: 'img/[name].[hash:7].[ext]'
			}
		}, {
			test: /\.(js|jsx)$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	devServer: {
		contentBase: './build',
		port: 8081,
		inline: true,
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlPlugin({
			template: 'public/index.html'
		})
	]
}
