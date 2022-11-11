import { Text, TouchableOpacity, View } from 'react-native';

export interface PrimaryButtonProps {
  onPress: () => void;
  text: string;
  a11y: {
    accessibilityLabel: string;
    accessibilityHint: string;
  };
}
export function PrimaryButton({ onPress, text, a11y }: PrimaryButtonProps) {
  return (
    <View className="bg-primary rounded-2xl h-8 w-1/6 border border-slate-200">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row justify-center items-center m-auto"
        accessible
        {...a11y}
      >
        <Text className="text-white font-bold">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
