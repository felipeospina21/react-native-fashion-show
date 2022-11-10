import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

export function ZoomControll() {
  return (
    <View className="w-10 h-32 rounded-2xl flex items-middle justify-between border-2 border-gray-700 absolute top-36 right-10 bg-dark_bg">
      <View className="flex items-center my-3">
        <FontAwesome name="plus" size={22} color="white" />
      </View>
      <View className="flex items-center my-3">
        <FontAwesome name="minus" size={22} color="white" />
      </View>
    </View>
  );
}
