import type { ImageSourcePropType } from 'react-native';

export type AssetType = 'Hair' | 'Shirts' | 'Pants' | 'Shoes';

export interface AssetTypeData {
  type: AssetType;
  image: ImageSourcePropType;
}

export interface AssetData {
  id: number;
  thumb: string;
  image: string;
  price: {
    icon: string;
    value: number;
  };
}

export interface AssetsState {
  hair?: AssetImage;
  shirts?: AssetImage;
  pants?: AssetImage;
  shoes?: AssetImage;
}
export type AssetImage = ImageSourcePropType | undefined;
