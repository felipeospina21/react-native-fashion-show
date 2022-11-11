import { Text, View } from 'react-native';

interface InfoTextProps {
  children: string;
}

export function InfoText({ children }: InfoTextProps) {
  return (
    <View className="bg-text_secondary w-full h-full rounded-2xl relative">
      <Text className="text-text_primary text-center my-2 font-bold text-[11px] md:text-xs">
        {children}
      </Text>
    </View>
  );
}
