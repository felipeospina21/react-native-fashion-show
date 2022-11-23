import React from 'react';
import { Image, Pressable, View } from 'react-native';
import type { AssetData } from '../types';
import CostTag from './CostTag';

interface AssetCardProps extends AssetData {
  onPress: () => void;
}

export default function AssetCard({ image, price, onPress }: AssetCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel="Pick Asset"
      accessibilityHint="Pick character Asset"
      className="border border-border-light bg-bg-purple w-32 rounded-2xl flex justify-around items-center mx-2"
    >
      <Image source={image} accessibilityIgnoresInvertColors />
      <View className="h-1/3">
        <CostTag icon={price.icon} value={price.value} textStyle={{ color: 'white' }} />
      </View>
    </Pressable>
  );
}
