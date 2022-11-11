import type { PrimaryButtonProps } from '@shared';
import { TouchableOpacity, View } from 'react-native';
interface TargetProps extends Omit<PrimaryButtonProps, 'text'> {
  onPress: () => void;
  isPressed: boolean;
}

export function Target({ isPressed, onPress, a11y }: TargetProps) {
  const TARGET_CLASS = 'w-3 h-3 rounded-full';
  const NOT_PRESSED_CLASS = `${TARGET_CLASS} bg-red-500`;
  const PRESSED_CLASS = `${TARGET_CLASS} bg-yellow-500`;
  return (
    <View className="w-9 h-9 bg-light_glass flex items-center justify-center rounded-full ">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row justify-center items-center m-auto"
        accessible
        {...a11y}
      >
        <View className="w-8 h-8 items-center justify-center rounded-full">
          <View className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
            <View className={isPressed ? PRESSED_CLASS : NOT_PRESSED_CLASS} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
