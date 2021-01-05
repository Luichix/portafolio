const HtmlWebpackPlugin = require('html-webpack-plugin')

const imageRules = {
  test: /\.(svg|png|jpg|jpeg|gif|pdf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'assets',
        useRelativePath: true
      }
    }
  ]

}

const sassRules = {
  // Creates `style` nodes from JS strings
  test: /\.scss$/,
  use: [
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Translate Url
    'resolve-url-loader',
    // Translates SCSS into CSS
    'sass-loader'
  ]
}

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-runtime']
    }
  }
}

module.exports = {
  output: {
    filename: 'app.[contentHash].js'
  },
  module: {
    rules: [javascriptRules, sassRules, imageRules]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack portafolio',
      template: 'src/index.html'
    })
  ]
}
