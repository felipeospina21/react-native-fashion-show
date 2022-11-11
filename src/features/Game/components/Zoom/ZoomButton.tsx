import { FontAwesome } from '@expo/vector-icons';
import { Dimensions, Pressable, View } from 'react-native';

interface ZoomButtonProps {
  onPress: () => void;
  iconName: 'plus' | 'minus';
  a11y: {
    label: string;
    hint: string;
  };
}

export function ZoomButton({ onPress, iconName, a11y: { label, hint } }: ZoomButtonProps) {
  const { width } = Dimensions.get('window');
  const ICON_SIZE = Math.floor(width * 0.03);
  return (
    <Pressable accessible accessibilityHint={hint} accessibilityLabel={label} onPress={onPress}>
      <View className="flex items-center my-3">
        <FontAwesome name={iconName} size={Math.min(ICON_SIZE, 22)} color="white" />
      </View>
    </Pressable>
  );
}
