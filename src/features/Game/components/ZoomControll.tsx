import { FontAwesome } from '@expo/vector-icons';
import { Dimensions, View } from 'react-native';

export function ZoomControll() {
  const { width } = Dimensions.get('window');
  const ICON_SIZE = Math.floor(width * 0.03);
  return (
    <View className="w-[6%] h-1/3 rounded-2xl flex items-middle justify-between border-2 border-gray-700 absolute top-36 right-10 bg-dark_bg">
      <View className="flex items-center my-3">
        <FontAwesome name="plus" size={Math.min(ICON_SIZE, 22)} color="white" />
      </View>
      <View className="flex items-center my-3">
        <FontAwesome name="minus" size={Math.min(ICON_SIZE, 22)} color="white" />
      </View>
    </View>
  );
}
