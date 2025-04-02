const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
  resolver: {
    ...getDefaultConfig(__dirname).resolver,
    assetExts: [...getDefaultConfig(__dirname).resolver.assetExts, 'lottie'],
  },
});

module.exports = withNativeWind(config, {
  input: './src/global.css',
  inlineRem: 16,
});
