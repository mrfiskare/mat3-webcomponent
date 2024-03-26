const path = require('path');
module.exports = {
  entry: {
    'bundle.js': [
      path.resolve(__dirname, 'dist/mat3-webcomponent/browser/polyfills.js'),
      path.resolve(__dirname, 'dist/mat3-webcomponent/browser/styles.css'),
      path.resolve(__dirname, 'dist/mat3-webcomponent/browser/main.js')
    ]
  },
  output: { filename: '[name]', path: path.resolve(__dirname, 'dist') },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
