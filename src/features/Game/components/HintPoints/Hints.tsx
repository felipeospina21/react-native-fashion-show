import { useStore } from '@zustandStore';
import { HintPoint } from './HintPoint';

export function Hints() {
  const { points, addCount } = useStore();
  return (
    <>
      {points.map((point, index) => (
        <HintPoint key={index} onPress={addCount} point={point} />
      ))}
    </>
  );
}
