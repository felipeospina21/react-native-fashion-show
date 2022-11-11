import { Animated } from 'react-native';

export function fadeInAnimation(ref: Animated.Value) {
  return Animated.timing(ref, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
}
