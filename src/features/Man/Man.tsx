import manBody from '@assets/man/man-body.png';
import maleHair from '@assets/man/thumb-hair.png';
import malePants from '@assets/man/thumb-pants.png';
import maleShirt from '@assets/man/thumb-shirt.png';
import maleShoes from '@assets/man/thumb-shoes.png';
import type { AssetTypeData } from '@shared';
import { CharacterLayout } from '@shared';

export function Man() {
  const assets: AssetTypeData[] = [
    {
      type: 'Hair',
      image: maleHair,
    },
    {
      type: 'Shirt',
      image: maleShirt,
    },
    {
      type: 'Pants',
      image: malePants,
    },
    {
      type: 'Shoes',
      image: maleShoes,
    },
  ];
  return <CharacterLayout assetTypes={assets} character={manBody} />;
}
