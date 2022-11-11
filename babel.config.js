module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@App': './src/App.tsx',
            '@shared': './src/shared',
            '@features': './src/features',
            '@zustandStore': './src/zustand/index',
            '@utils': './src/utils/index',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
