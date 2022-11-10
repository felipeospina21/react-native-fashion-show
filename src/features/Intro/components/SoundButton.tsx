import { IconButton } from '@shared';
import { ImageSourcePropType, View } from 'react-native';

interface SoundButtonProps {
  icon: ImageSourcePropType;
  onPress: () => void;
}
export function SoundButton({ icon, onPress }: SoundButtonProps) {
  return (
    <View className="absolute bottom-6 right-10 border border-light_bg rounded-full p-2 bg-dark_bg w-11 h-11">
      <IconButton
        onPress={onPress}
        a11y={{
          accessibilityHint: 'encender/apagar sonido',
          accessibilityLabel: 'contolar sonido',
        }}
        icon={icon}
      />
    </View>
  );
}
