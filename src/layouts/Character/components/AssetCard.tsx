import { CharacterGender, useStore } from '@zustandStore';
import { Image, ImageSourcePropType, Pressable, View } from 'react-native';
import type { AssetData, AssetsState, AssetType } from '../types';
import CostTag from './CostTag';

interface AssetCardProps {
  setAsset: React.Dispatch<React.SetStateAction<AssetsState>>;
  assetData: AssetData;
  assetType: AssetType;
  characterGender: CharacterGender;
}

export default function AssetCard({
  assetData: { thumb, image, price, id },
  setAsset,
  assetType,
  characterGender,
}: AssetCardProps) {
  const [useBalance, buyAsset, assetsOwned, balance] = useStore((state) => [
    state.useBalance,
    state.buyAsset,
    state.assetsOwned,
    state.balance,
  ]);

  const IS_ASSET_OWNED = assetsOwned[characterGender][assetType].find((value) => value === id);
  const OWNED_STYLE = IS_ASSET_OWNED ? { opacity: 0.5 } : { opacity: 1 };

  function checkFundsAndAssets() {
    const playerHasAsset = assetsOwned[characterGender][assetType].includes(id);
    const assetCost = price.value;
    const playerHasFunds = assetCost <= balance[price.currency];
    if (!playerHasAsset && playerHasFunds) {
      useBalance(price.currency, price.value);
      buyAsset({ type: assetType, gender: characterGender, id });
      setAsset((prev) => ({ ...prev, [assetType]: image as ImageSourcePropType }));
    }
  }

  function handlePress() {
    checkFundsAndAssets();
  }

  return (
    <Pressable
      onPress={handlePress}
      accessibilityLabel="Pick Asset"
      accessibilityHint="Pick character Asset"
      className="border border-border-light bg-bg-purple w-32 rounded-2xl flex justify-around items-center mx-2"
      style={{ ...OWNED_STYLE }}
    >
      <View className="w-full h-2/3 flex-row justify-center items-center">
        <Image
          source={thumb as ImageSourcePropType}
          accessibilityIgnoresInvertColors
          resizeMethod="resize"
          resizeMode="contain"
          style={{ height: '100%', width: undefined, aspectRatio: 1.5 }}
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
