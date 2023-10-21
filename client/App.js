import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Navigation from './navigation';
import { store } from './store';
import { SplashScreen } from './screens/SplashScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);
  const [customFontsLoaded, setCustomFontsLoaded] = useState(false);

  // Define as fontes personalizadas
  const customFonts = {
    RockStyle: require('./assets/fonts/RockStyle.ttf'),
  };

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // Função para carregar as fontes personalizadas
  async function loadCustomFonts() {
    await Font.loadAsync(customFonts);
    setCustomFontsLoaded(true);
  }

  useEffect(() => {
    // Carregue as fontes personalizadas quando o componente for montado
    loadCustomFonts();
  }, []);

  // Verifique se as fontes personalizadas foram carregadas antes de renderizar o conteúdo do aplicativo
  if (!customFontsLoaded) {
    return <AppLoading />;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return splashComplete ? (
    <Navigation />
  ) : (
    <SplashScreen onComplete={setSplashComplete} />
  );
}
