import { useStore } from '@zustandStore';
import { Pressable, Text, View } from 'react-native';

export function Counter() {
  const { resetState, count } = useStore();

  return (
    <View className="w-24 h-9 border-2 border-white rounded-3xl flex-row items-center justify-end bg-dark_glass absolute top-6 right-28">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-sm font-bold">{count}</Text>
      </View>
      <Pressable
        onPress={resetState}
        accessibilityLabel="reset estado"
        accessibilityHint="reinicia estado"
      >
        <View className="w-9 h-9 bg-white flex items-center justify-center rounded-full">
          <View className="w-4 h-4 bg-red-500 rounded-full" />
        </View>
      </Pressable>
    </View>
  );
}
