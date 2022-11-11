import { useEffect } from 'react';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface PulseProps {
  delay?: number;
}

export function Pulse({ delay = 0 }: PulseProps) {
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = withDelay(
      delay,
      withRepeat(withTiming(1, { duration: 2000, easing: Easing.linear }), -1, false)
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(animation.value, [0, 1], [0.6, 0], Extrapolate.CLAMP);
    return { opacity: opacity, transform: [{ scale: animation.value }] };
  });

  return (
    <Animated.View
      className="absolute bottom-[-32px] w-[100px] h-[100px] rounded-full border-4 border-pulse-border bg-pulse-bg"
      style={[animatedStyles]}
    />
  );
}
