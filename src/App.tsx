import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { Home, Intro } from './features';

export type RootStackParamList = {
  Home: undefined;
  Intro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props['navigation'];

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
