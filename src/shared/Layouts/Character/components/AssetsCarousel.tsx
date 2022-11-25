import { useRoute } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';
import type { AssetsState, AssetType } from '../types';
import AssetCard from './AssetCard';
import { data } from '@mocks/data'

interface AssetsCarouselProps {
  title: AssetType;
  setAsset: React.Dispatch<React.SetStateAction<AssetsState>>;
}

export function AssetsCarousel({ title, setAsset }: AssetsCarouselProps) {
  const route = useRoute();
  const routeName = route.name.toLowerCase();
  const assetType = title.toLowerCase();
  return (
    <View className="border-2 border-border-light h-[30%] w-full bg-bg-purple rounded-t-3xl absolute bottom-0 left-0 flex justify-evenly items-center">
      <Text className="text-white text-xl">{title}</Text>
      <View className="w-full h-1/2">
        <FlatList
          horizontal
          data={data[routeName][assetType]}
          renderItem={({ item }) => (
            <AssetCard
              thumb={item.thumb}
              image={item.image}
              price={item.price}
              assetType={assetType}
              setAsset={setAsset}
            />
          )}
        />
      </View>
    </View>
  );
}
