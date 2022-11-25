import home from '@assets/home-bg.png';
import girl from '@assets/home-girl.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { GenderButtons, HomeTitle, MenuSvg } from './components';

SplashScreen.preventAutoHideAsync();

export function Home() {
  const [fontsLoaded] = useFonts({
    'Porter-Sans': require('../../../assets/fonts/porter-sans-inline-block.otf'),
  });
  
  // useEffect(() => {
  //   async function getAssets(){
  //     const req = await fetch('https://e586-181-128-100-207.ngrok.io/man')
  //     const json = await req.json()
  //     console.log(json)

  //   }
  //   getAssets()
  // }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ImageBackground source={home} onLayout={onLayoutRootView}>
      <View className="flex items-center justify-end h-full">
        <View className="mb-[-50px]">
          <Image source={girl} accessibilityIgnoresInvertColors />
        </View>

        <View className="flex items-center w-full justify-evenly h-1/3 ">
          <MenuSvg />
          <HomeTitle />
          <GenderButtons />
        </View>
      </View>
    </ImageBackground>
  );
}
