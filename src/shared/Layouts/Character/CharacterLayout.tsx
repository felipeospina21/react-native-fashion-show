import characterBg from '@assets/secondary-bg.png';
import { useState } from 'react';
import { ImageBackground, ImageSourcePropType } from 'react-native';
import { AssetsCarousel, AssetTypeSelector, CharacterBody, UserBalance } from './components';
import type { AssetType, AssetTypeData, AssetsState } from './types';

interface CharacterLayoutProps {
  assetTypes: AssetTypeData[];
  character: ImageSourcePropType;
}


export function CharacterLayout({ assetTypes, character }: CharacterLayoutProps): JSX.Element {
  const [selectedAssetType, setSelectedAssetType] = useState<AssetType>('Hair');
  const [assets, setAssets] = useState<AssetsState>({hair: undefined, shirts: undefined, pants: undefined, shoes: undefined})


  return (
    <ImageBackground source={characterBg} className="h-full">
      <UserBalance />
      <AssetTypeSelector assetTypes={assetTypes} onPress={setSelectedAssetType} />
      <CharacterBody imageSource={character} assets={assets}/>
      <AssetsCarousel title={selectedAssetType} setAsset={setAssets} />
    </ImageBackground>
  );
}
