import { FlatList, Text, View } from 'react-native';
import type { AssetData, AssetType } from '../types';
import AssetCard from './AssetCard';

interface AssetsCarouselProps {
  data: AssetData[];
  title: AssetType;
}

export function AssetsCarousel({ data, title }: AssetsCarouselProps) {
  return (
    <View className="border-2 border-border-light h-[30%] w-full bg-bg-purple rounded-t-3xl absolute bottom-0 left-0 flex justify-evenly items-center">
      <Text className="text-white text-xl">{title}</Text>
      <View className="w-full h-1/2">
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <AssetCard
              image={item.image}
              price={item.price}
              onPress={() => console.log('asset selected')}
            />
          )}
        />
      </View>
    </View>
  );
}
