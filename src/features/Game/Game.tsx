import gameImage from '@assets/game.png';
import { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Counter, ScorePoints, ZoomControll } from './components';
import { pointsContent } from './data';

export function Game() {
  const [count, setCount] = useState(0);

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
        {pointsContent.map(({ text, coordinates }, index) => (
          <ScorePoints key={index} onPress={addCount} text={text} coordinates={coordinates} />
        ))}
      </View>
    </ImageBackground>
  );
}
