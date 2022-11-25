import womanHair from '@assets/woman/thumb-hair.png';
import womanPants from '@assets/woman/thumb-pants.png';
import womanShirt from '@assets/woman/thumb-shirt.png';
import womanShoes from '@assets/woman/thumb-shoes.png';
import womanBody from '@assets/woman/woman-body1.png';
import type { AssetTypeData } from '@shared';
import { CharacterLayout } from '@shared';

export function Woman() {
  const assets: AssetTypeData[] = [
    {
      type: 'Hair',
      image: womanHair,
    },
    {
      type: 'Shirts',
      image: womanShirt,
    },
    {
      type: 'Pants',
      image: womanPants,
    },
    {
      type: 'Shoes',
      image: womanShoes,
    },
  ];
  return <CharacterLayout assetTypes={assets} character={womanBody} />;
}
