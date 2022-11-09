import type { ProfileScreenNavigationProp } from '@App';
import home from '@assets/home.png';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '@shared';
import { ImageBackground, View } from 'react-native';

export function Home() {
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();

  return (
    <ImageBackground source={home}>
      <View className="flex justify-end items-center h-full p-10">
        <PrimaryButton
          text="INICIAR"
          onPress={() => navigate('Intro')}
          a11y={{
            accessibilityLabel: 'iniciar',
            accessibilityHint: 'ir a pantalla de intro',
          }}
        />
      </View>
    </ImageBackground>
  );
}
