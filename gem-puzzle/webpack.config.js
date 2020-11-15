const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: 'index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
  };
  
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      
}
    


