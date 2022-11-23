import React from 'react';
import { Image, Text, View } from 'react-native';
import type { ImageSourcePropType, TextStyle } from 'react-native'

interface CostTagProps {
  icon: ImageSourcePropType;
  value: string;
  textStyle? : TextStyle;
}

export default function CostTag({ icon, value, textStyle }: CostTagProps) {
  return (
    <View className="flex-row justify-evenly items-center w-1/2 h-full">
      <Image source={icon} accessibilityIgnoresInvertColors />
      <Text style={{...textStyle}}>{value}</Text>
    </View>
  );
}
