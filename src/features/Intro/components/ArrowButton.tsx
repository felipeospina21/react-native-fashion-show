import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

interface ArrowButtonProps {
  color?: string;
  size?: number;
  onPress: () => void;
}
export function ArrowButton({ onPress, color = 'black', size = 44 }: ArrowButtonProps) {
  return (
    <View className="absolute top-14 right-12">
      <AntDesign name="arrowright" size={size} color={color} onPress={onPress} />
    </View>
  );
}
