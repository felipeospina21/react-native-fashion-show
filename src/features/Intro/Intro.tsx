import type { ProfileScreenNavigationProp } from '@App';
import intro from '@assets/intro.png';
import music from '@assets/music.mp3';
import soundIcon from '@assets/sound.png';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, View } from 'react-native';
import { Abstract, ArrowButton, SoundButton } from './components';
import { useControllSound, useSound } from './hooks';

export function Intro() {
  const sound = useSound(music);
  const toggleMusic = useControllSound(sound);
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();
  const TEXT_YELLOW = '#F4EEB2';

  return (
    <ImageBackground
      source={intro}
      accessibilityLabel="imagen dia de los muertos"
      accessibilityHint="imagen de fondo"
      className="h-full"
    >
      <View className="h-full w-full">
        <Abstract />
        <ArrowButton color={TEXT_YELLOW} onPress={() => navigate('Game')} />

        <SoundButton icon={soundIcon} onPress={toggleMusic} />
      </View>
    </ImageBackground>
  );
}
