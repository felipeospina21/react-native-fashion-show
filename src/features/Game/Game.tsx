import gameImage from '@assets/game.png';
import { useZoom } from '@hooks';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { ImageBackground, View } from 'react-native';
import { Counter, Hints, ZoomButton, ZoomControll } from './components';

export function Game() {
  const { zoomIn, zoomOut, zoomableViewRef } = useZoom();

  return (
    <ReactNativeZoomableView minZoom={1} ref={zoomableViewRef}>
      <ImageBackground
        source={gameImage}
        accessibilityLabel="imagen dia de los muertos"
        accessibilityHint="imagen de fondo"
        className="h-full w-full"
      >
        <View className="h-full">
          <ZoomControll>
            <ZoomButton
              iconName="plus"
              onPress={zoomIn}
              a11y={{ label: 'zoom in', hint: 'aumentar tamano pantalla' }}
            />
            <ZoomButton
              iconName="minus"
              onPress={zoomOut}
              a11y={{ label: 'zoom out', hint: 'disminuir tamano panalla' }}
            />
          </ZoomControll>
          <Counter />
          <Hints />
        </View>
      </ImageBackground>
    </ReactNativeZoomableView>
  );
}
