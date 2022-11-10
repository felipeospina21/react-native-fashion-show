import { Audio, AVPlaybackSource } from 'expo-av';
import { useEffect, useState } from 'react';

export function useSound(soundFile: AVPlaybackSource) {
  const [audio, setAudio] = useState<Audio.Sound>();

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setAudio(sound);
  }

  useEffect(() => {
    loadSound();
  }, [soundFile]);

  useEffect(() => {
    if (!audio) return;
    return () => {
      audio.unloadAsync();
    };
  }, [audio]);

  return audio;
}
