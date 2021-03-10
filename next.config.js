const withReactSvg = require('next-react-svg')
const path = require('path')
const withTM = require("next-transpile-modules")([
  'three',
  'react-three-fiber',
  '@react-three/drei'
])
const { i18n } = require('./next-i18next.config')

module.exports = withTM(withReactSvg({
  include: path.resolve(__dirname, 'assets/svg'),
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  },
  i18n
}))