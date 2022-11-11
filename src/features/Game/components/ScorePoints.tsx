import { Pressable, View } from 'react-native';
import { InfoText } from './InfoText';
import { Target } from './Target';
import { Point, useStore } from '@zustandStore'

interface TargetProps {
  onPress: () => void;
  point: Point;
}

export function ScorePoints({ onPress, point:{ text, coordinates,id, isPressed, showText}}: TargetProps) {
  const { markAsPressed, toggleText } = useStore()

  function handlePress() {
    markAsPressed(id);
    toggleText(id)
    if (!isPressed) onPress();
  }
  return (
    <View className="absolute top-10 left-10 flex items-center w-1/4" style={coordinates}>
      <View className="w-full h-20">
        <Pressable
          accessible
          accessibilityLabel="toca para cerrar"
          accessibilityHint="cierra el modal con texto"
          onPress={()=>toggleText(id)}
        >
          {showText && <InfoText>{text}</InfoText>}
        </Pressable>
      </View>
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
