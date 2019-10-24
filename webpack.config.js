var webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    photocarousel: '../photo-carousel/client/components/stylesheet.jsx',
    castphotos: '../castphotos/client/styled.js',
    //AUDIENCEREVIEWS: '../AUDIENCE-REVIEWS/client/src/index.jsx',
    //CRITICREVIEWS: '../CRITIC_REVIEWS/client/Components/Styles.jsx'
  },
  output: {
    path: __dirname + '/dist',
    chunkFilename: '[name].bundle.js',
    filename: '[name].[chunkhash].bundle.js'
  },

  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/
    }]
  },
  resolve: {
    modules: ['node_modules', '../jgens-proxy-server/node_modules/']
  },

  plugins: [
    new webpack.optimize.SplitChunksPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](styled-components)[\\/]/,
          name: 'styled-components',
          chunks: 'all'
        },
        default: {
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'styled-components'
    }
  }

 };
