import { Image, TouchableOpacity, View } from 'react-native';
import sound from '@assets/sound.svg'

interface IconButtonProps {
  onPress: () => void;
  icon: string,
  a11y: {
    accessibilityLabel:string;
    accessibilityHint: string;
  }
}
export function IconButton({ onPress, icon, a11y }: IconButtonProps) {
  return (
    <View className="bg-primary rounded-2xl h-8 w-1/6 border border-white">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row justify-center items-center m-auto"
        accessible
        {...a11y}
      >
        <Image source={sound} accessibilityIgnoresInvertColors/>
      </TouchableOpacity>
    </View>
  );
}
