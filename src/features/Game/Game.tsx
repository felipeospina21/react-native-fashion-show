import gameImage from '@assets/game.png';
import { ImageBackground, View } from 'react-native';
import { Counter, ZoomControll } from './components';

export function Game() {
  return (
    <ImageBackground
      source={gameImage}
      accessibilityLabel="imagen dia de los muertos"
      accessibilityHint="imagen de fondo"
      className="h-full"
    >
      <View>
        <Counter />
        <ZoomControll />
      </View>
    </ImageBackground>
  );
}
