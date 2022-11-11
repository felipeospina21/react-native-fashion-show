import { View } from 'react-native';

interface ZoomControllProps {
  children: JSX.Element[] | JSX.Element;
}
export function ZoomControll({ children }: ZoomControllProps) {
  return (
    <View className="w-[6%] h-1/3 rounded-2xl flex items-middle justify-between border-2 border-gray-700 absolute top-24 right-10 bg-dark_bg z-10">
      {children}
    </View>
  );
}
