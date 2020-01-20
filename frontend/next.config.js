const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(withSass(withPurgeCss({
  cssModules: true,
  compress: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:5]',
  },
  
  // purgeCSS
  purgeCssEnabled: ({ dev, isServer }) => (dev && isServer), // Only enable PurgeCSS for client-side production builds
  purgeCssPaths: [
    'src/pages/**/*',
    'src/components/**/*',
    'src/etaui/**/*' // also scan etaui folder
  ],
  // /purgeCSS
  webpack(config, options) {
    config.module.rules.unshift({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    // /rules
    return config
  }
})))