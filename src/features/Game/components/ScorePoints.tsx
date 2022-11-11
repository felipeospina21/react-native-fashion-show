import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { InfoText } from './InfoText';
import { Target } from './Target';

interface TargetProps {
  onPress: () => void;
  text: string;
  coordinates: {
    top?: number | string;
    right?: number | string;
    left?: number | string;
    bottom?: number | string;
  };
}

export function ScorePoints({ onPress, text, coordinates }: TargetProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal((prev) => !prev);
  }

  function handlePress() {
    setIsPressed(true);
    toggleModal();
    if (!isPressed) onPress();
  }
  return (
    <View className="absolute top-10 left-10 flex items-center w-1/4" style={coordinates}>
      <View className="w-full h-20">
        <Pressable
          accessible
          accessibilityLabel="toca para cerrar"
          accessibilityHint="cierra el modal con texto"
          onPress={toggleModal}
        >
          {showModal && <InfoText>{text}</InfoText>}
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
