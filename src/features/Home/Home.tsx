import { useNavigation } from '@react-navigation/native';
import { ImageBackground, View } from 'react-native';
import home from '../../../assets/home.png';
import type { ProfileScreenNavigationProp } from '../../App';
import { PrimaryButton } from '../../shared';

export function Home() {
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();

  return (
    <ImageBackground source={home}>
      <View className="flex justify-end items-center h-full p-10">
        <PrimaryButton text="INICIAR" onPress={() => navigate('Intro')} />
      </View>
    </ImageBackground>
  );
}
