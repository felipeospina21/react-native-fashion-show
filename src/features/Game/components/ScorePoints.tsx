import { Point, useStore } from '@zustandStore';
import { useRef } from 'react';
import { Animated, Pressable, View } from 'react-native';
import { InfoText } from './InfoText';
import { Target } from './Target';

interface TargetProps {
  onPress: () => void;
  point: Point;
}

export function ScorePoints({
  onPress,
  point: { text, coordinates, id, isPressed, showText },
}: TargetProps) {
  const { markAsPressed, toggleText } = useStore();
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  function fadeIn() {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  function handlePress() {
    markAsPressed(id);
    toggleText(id);
    if (!showText) fadeIn();
    if (!isPressed) onPress();
  }
  return (
    <View className="absolute top-10 left-10 flex items-center w-1/4" style={coordinates}>
      <Animated.View className="w-full h-20" style={{ opacity: fadeAnimation }}>
        <Pressable
          accessible
          accessibilityLabel="toca para cerrar"
          accessibilityHint="cierra el modal con texto"
          onPress={() => toggleText(id)}
        >
          {showText && <InfoText>{text}</InfoText>}
        </Pressable>
      </Animated.View>
      <Target
        isPressed={isPressed}
        onPress={handlePress}
        a11y={{
          accessibilityLabel: 'click aqui',
          accessibilityHint: 'despliega texto informativo',
        }}
      />
    </View>
  );
}
