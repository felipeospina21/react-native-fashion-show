import { Text, View } from 'react-native';

interface CounterProps {
  count: number;
}
export function Counter({ count }: CounterProps) {
  return (
    <View className="w-24 h-9 border-2 border-white rounded-3xl flex-row items-center justify-end bg-dark_glass absolute top-6 right-28">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-sm font-bold">{count}</Text>
      </View>
      <View className="w-9 h-9 bg-white flex items-center justify-center rounded-full">
        <View className="w-4 h-4 bg-red-500 rounded-full" />
      </View>
    </View>
  );
}
