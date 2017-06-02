module.exports = {
  devtool: 'inline-source-map',
  entry: './index.js',
  watch: true,
  output: {
    filename: './public/bundle.js',
    sourceMapFilename: './public/bundle.js.map'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015' ]
      }
    }, {
      test: /\.sass$/,
      loader: 'style-loader!css-loader!sass-loader!'
    }]
  }
};
