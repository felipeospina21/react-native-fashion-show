import { Pulse } from '@shared';
import { fadeInAnimation } from '@utils';
import { Point, useStore } from '@zustandStore';
import { useRef } from 'react';
import { Animated, View } from 'react-native';
import { InfoText } from './InfoText';
import { Target } from './Target';

interface TargetProps {
  onPress: () => void;
  point: Point;
}

export function HintPoint({
  onPress,
  point: { text, coordinates, id, isPressed, showText },
}: TargetProps) {
  const { markAsPressed, toggleText } = useStore();
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  function handlePress() {
    markAsPressed(id);
    toggleText(id);
    if (!showText) fadeInAnimation(fadeAnimation);
    if (!isPressed) onPress();
  }
  return (
    <View className="absolute top-10 left-10 flex items-center w-1/4 z-10" style={coordinates}>
      {!isPressed && <Pulse />}
      <Animated.View className="w-full h-16" style={{ opacity: fadeAnimation }}>
        {showText && <InfoText id={id}>{text}</InfoText>}
      </Animated.View>
      <Target isPressed={isPressed} onPress={handlePress} />
    </View>
  );
}
