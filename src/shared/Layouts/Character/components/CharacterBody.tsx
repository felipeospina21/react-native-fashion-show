import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

interface CharacterBodyProps {
  imageSource: ImageSourcePropType
}
export function CharacterBody({ imageSource}: CharacterBodyProps) {
  return (
    <Image
      source={imageSource}
      accessibilityIgnoresInvertColors
      className="absolute bottom-1/3 left-1/4 -translate-x-1/2 border border-red-500" />
  );
}
