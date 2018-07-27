var path = require('path');

module.exports = {
  entry: {
    utils: './src/utils/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    library: 'utils',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      use: {
        loader: 'babel-loader?cacheDirectory',
        options: {
          presets: ['env'],
          plugins: ['transform-runtime']
        }
      }
    }]
  }
};
