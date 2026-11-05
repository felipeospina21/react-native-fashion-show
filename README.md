# react-native-fashion-show

A React Native (Expo) character dress-up app built as a practice project. Pick a man or woman character, then try on hair, shirts, pants and shoes from a carousel. Each item has a price in coins or gems.

## Features

- Home screen with a gender selector
- Character screen with a selectable asset type (hair, shirts, pants, shoes)
- Asset carousel with price tags (coins and gems) and a user balance display
- Animations built with Reanimated (pulse and fade-in effects)

## Tech stack

- [Expo](https://expo.dev/) 47 / React Native 0.70 / TypeScript
- React Navigation (native stack)
- Zustand for state management
- NativeWind (Tailwind CSS) for styling
- React Native Reanimated and SVG

## Getting started

Requires Node 18 (see `.nvmrc`) and Yarn.

```bash
yarn install
yarn start      # Expo dev server
yarn ios        # iOS simulator
yarn android    # Android emulator
yarn web        # Web
```

## Project structure

```
src/
├── views/      # Screens: Home, Man, Woman
├── layouts/    # Shared character layout and its components
├── shared/     # Buttons and animations
├── hooks/      # useZoom, useFadeInAnimation
├── zustand/    # Global store
└── mocks/      # Asset data for each character
```

> This was a learning project and is not actively maintained.
