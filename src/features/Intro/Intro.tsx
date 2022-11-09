import intro from '@assets/intro.png';
import { ImageBackground, Text, View } from 'react-native';
import { IconButton } from '@shared';

export function Intro() {
  return (
    <ImageBackground
      source={intro}
      accessibilityLabel="imagen dia de los muertos"
      accessibilityHint="imagen de fondo"
      className="h-full"
    >
      <View className="h-full w-full">
        <Text className="m-10">Intro</Text>
        <Text className="absolute bottom-6 right-10">botton</Text>
        <IconButton
          onPress={() => {
            return;
          }}
          a11y={{
            accessibilityHint: 'encender/apagar sonido',
            accessibilityLabel: 'contolar sonido',
          }}
          icon="srt"
        />
      </View>
    </ImageBackground>
  );
}
