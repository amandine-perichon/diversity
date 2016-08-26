module.exports = {
  entry: './src/index.js',
  output: 'bundle.js',
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules' },
      {
        test: [/\.d3x$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
