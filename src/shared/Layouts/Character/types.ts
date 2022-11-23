import type { ImageSourcePropType } from 'react-native'

export type AssetType = 'Hair' | 'Shirt' | 'Pants' | 'Shoes';

export interface AssetTypeData {
  type: AssetType;
  image: ImageSourcePropType;
}

export interface AssetData {
  image: ImageSourcePropType;
  price: {
    icon: ImageSourcePropType;
    value: string;
  };
}
