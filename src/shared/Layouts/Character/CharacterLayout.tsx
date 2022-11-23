import coinIcon from '@assets/coin.png';
import characterBg from '@assets/secondary-bg.png';
import { useState } from 'react';
import { ImageBackground, ImageSourcePropType } from 'react-native';
import { AssetsCarousel, AssetTypeSelector, CharacterBody, UserBalance } from './components';
import type { AssetType, AssetTypeData } from './types';

interface CharacterLayoutProps {
  assetTypes: AssetTypeData[];
  character: ImageSourcePropType;
}

export function CharacterLayout({ assetTypes, character }: CharacterLayoutProps): JSX.Element {
  const [selectedAssetType, setSelectedAssetType] = useState<AssetType>('Hair');

  const assetsCarousel = assetTypes.map((asset) => ({
    image: asset.image,
    price: { icon: coinIcon, value: '200' },
  }));

  return (
    <ImageBackground source={characterBg} className="h-full">
      <UserBalance />
      <AssetTypeSelector assetTypes={assetTypes} onPress={setSelectedAssetType} />
      <CharacterBody imageSource={character} />
      <AssetsCarousel title={selectedAssetType} data={assetsCarousel} />
    </ImageBackground>
  );
}
