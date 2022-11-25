import { Image, ImageSourcePropType, Pressable, View } from 'react-native';
import type { AssetData, AssetsState } from '../types';
import CostTag from './CostTag';

interface AssetCardProps extends Omit<AssetData, 'id'> {
  setAsset:  React.Dispatch<React.SetStateAction<AssetsState>>;
  assetType:string;
}

export default function AssetCard({ thumb, image, price, setAsset, assetType }: AssetCardProps) {
  function handlePress(){
    setAsset((prev)=> ({...prev, [assetType]:image as ImageSourcePropType }) )
  }

  return (
    <Pressable
      onPress={handlePress}
      accessibilityLabel="Pick Asset"
      accessibilityHint="Pick character Asset"
      className="border border-border-light bg-bg-purple w-32 rounded-2xl flex justify-around items-center mx-2"
    >
      <View className="w-full h-2/3 flex-row justify-center items-center">
        <Image
          source={thumb as ImageSourcePropType}
          accessibilityIgnoresInvertColors
          resizeMethod='resize'
          resizeMode='contain'
          style={{height:'100%', width:undefined, aspectRatio:1.5}}
        />
      </View>
      <View className="h-1/3">
        <CostTag
          icon={price.icon as ImageSourcePropType}
          value={price.value}
          textStyle={{ color: 'white' }}
        />
      </View>
    </Pressable>
  );
}
