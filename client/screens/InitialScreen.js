import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InitialScreen = () => {
  const navigation = useNavigation();
  return (

    
<ImageBackground 
    source={require('../assets/Mobile_SemT.png')} 
    style={styles.background}
>
    <Image 
        source={require('../assets/LogoHome.png')} 
        style={styles.logo}
        resizeMode="contain"
    />
 <Text style={styles.textHeader}>Chega de <Text style={styles.textHighlight}>esperar em fila!</Text></Text>
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.buttonText}>Faça sua reserva em minutos</Text>
        </TouchableOpacity>
    </View>
</ImageBackground>

  );
};

const styles = StyleSheet.create({
  background: {
      flex: 1,
      justifyContent: 'center',
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
      padding: 15,
      backgroundColor: 'rgba(0,0,0,0.6)', // cor de fundo semi-transparente
      borderRadius: 5,
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
  },
  logo: {
    width: '100%', 
    height: 250, 
    alignSelf: 'center',
    marginBottom: 40  // Espaço entre a imagem e o botão, ajuste conforme necessário
},
textHeader: {
    fontFamily: 'RockStyle',  // Certifique-se de ter essa fonte instalada e configurada
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10  // Espaço entre o texto e o botão, ajuste conforme necessário
},
textHighlight: {
    color: '#FFD700'  // Cor dourada
}


});

export default InitialScreen;
