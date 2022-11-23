import coinIcon from '@assets/coin.png';
import gemIcon from '@assets/gem.png';
import { View } from 'react-native';
import CostTag from './CostTag';

export function UserBalance() {
  return (
    <View className="w-2/5 h-8 border border-border-gray rounded-full absolute top-10 left-10 bg-bg-gray flex-row">
      <CostTag icon={gemIcon} value="3.0k" />
      <CostTag icon={coinIcon} value="3.0k" />
    </View>
  );
}
