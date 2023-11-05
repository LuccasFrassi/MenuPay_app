import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import initialstyle from '../styles/InitialStyle';

const InitialScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/Mobile_SemT.png')}
      style={initialstyle.background}
    >
      <Image
        source={require('../assets/LogoHome.png')}
        style={initialstyle.logo}
        resizeMode='contain'
      />
      <View style={initialstyle.textWrapper}>
        <Text style={initialstyle.textHeader}>Chega de</Text>
        <Text style={{ ...initialstyle.textHeader, ...initialstyle.textHighlight }}>
          esperar em fila!
        </Text>
      </View>
      <View style={initialstyle.container}>
        <TouchableOpacity
          style={initialstyle.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={initialstyle.buttonText}>Faça sua reserva em minutos</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default InitialScreen;