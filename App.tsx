import { StyleSheet, StatusBar } from 'react-native';
import { Background } from './src/components/background';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black

} from '@expo-google-fonts/inter';

export default function App() {

  const [fontsLoaded] = useFonts({ 
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <Home /> : <Loading /> }
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
