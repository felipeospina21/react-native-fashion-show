import { useStore } from '@zustandStore';
import { Pressable, Text, View } from 'react-native';
interface InfoTextProps {
  children: string;
  id: number;
}

export function InfoText({ children, id }: InfoTextProps) {
  const { toggleText } = useStore();

  return (
    <Pressable
      accessible
      accessibilityLabel="toca para cerrar"
      accessibilityHint="cierra el modal con texto"
      onPress={() => toggleText(id)}
    >
      <View className="bg-text_secondary w-full h-full rounded-2xl relative">
        <Text className="text-text_primary text-center my-2 font-bold text-[11px] md:text-xs">
          {children}
        </Text>
      </View>
    </Pressable>
  );
}
