import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export function useControllSound(sound: Audio.Sound | undefined) {
  const [playMusic, setPlayMusic] = useState(false);

  function toggleMusic() {
    setPlayMusic((prev) => !prev);
  }

  async function playSound() {
    if (sound) await sound.playAsync();
  }

  async function pauseSound() {
    if (sound) await sound.pauseAsync();
  }

  useEffect(() => {
    playMusic ? playSound() : pauseSound();
  }, [playMusic]);

  return toggleMusic;
}
