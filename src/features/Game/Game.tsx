import gameImage from '@assets/game.png';
import { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Counter, ScorePoints, ZoomControll } from './components';
import { useStore } from '@zustandStore';

export function Game() {
  const [count, setCount] = useState(0);
  const { points } = useStore()

  function addCount() {
    setCount((prev) => prev + 100);
  }

  return (
    <ImageBackground
      source={gameImage}
      accessibilityLabel="imagen dia de los muertos"
      accessibilityHint="imagen de fondo"
      className="h-full"
    >
      <View className="h-full">
        <Counter count={count} />
        <ZoomControll />
        {points.map((point, index) => (
          <ScorePoints key={index} onPress={addCount} point={point} />
        ))}
      </View>
    </ImageBackground>
  );
}
