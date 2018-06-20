var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var glob = require('glob-all');
let PurifyCSSPlugin = require('purifycss-webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin')

var inProduction = (process.env.NODE_ENV === 'production');

var HWPConfig = new HtmlWebpackPlugin({
  template: __dirname + "/index.html",
  file: "index.html",
  inject: "body"
});

var HWPConfigAbout = new HtmlWebpackPlugin({
  filename: 'about.html',
  template: __dirname + '/about.html'
});
var HWPConfigArticle = new HtmlWebpackPlugin({
  filename: 'article.html',
  template: __dirname + '/articles/2018/article.html'
});

var entry1 = ['sass-react', 'chart-js', 'copy-right', 'object-literal', 'spread-operator'];

var entryHtmlPlugins = entry1.map(function (entryName) {
  return new HtmlWebpackPlugin({
    filename: entryName + '.html',
    template: __dirname + `/articles/${entryName}.html`
  })
});

module.exports = {
  entry: {
    app: ['./src/main.js', './src/main.scss']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader', 'sass-loader'
          ],
          fallback: 'style-loader'
        })
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash].[ext]',
          // outputPath: 'img', outputPublic: 'img'
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [
            [
              "es2015", {
                modules: false
              }
            ]
          ]
        }
      }, {
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    HWPConfig, HWPConfigAbout,
    // HWPConfigArticle,
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new ExtractTextPlugin('[name].css'),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, '**/*.html')),
      minimize: inProduction
    }),

    new webpack.LoaderOptionsPlugin({minimize: inProduction})
  ].concat(entryHtmlPlugins)
};

if (inProduction) {
  module
    .exports
    .plugins
    .push(new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: true
      }
    }))
}
