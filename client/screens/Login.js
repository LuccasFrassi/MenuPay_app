import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione sua lógica de autenticação aqui
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>
      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/LogoHome.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#520201',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#FFD700',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 36,
    color: 'white',

  },
  input: {
    width: 350,
    height: 42.75,
    borderRadius: 21.375,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 100,
    marginTop: 300,
  },
  buttonContainer: {
    display: 'flex',
    width: 308,
    height: 113.25,
    paddingVertical: 6,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 62.5,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#E4B24F',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#7A0705', // Cor do texto
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: 'Inter',
    fontSize: 36, // 2.25rem = 36 (1rem = 16px)
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: 45, // 1.25rem = 20 (1rem = 16px)
  },
  title: {
    fontSize: 36,
    color: 'white',
  },

  label: {
    width: 202, // 12.625rem = 202 (1rem = 16px)
    height: 60, // 3.125rem = 50 (1rem = 16px)
    flexShrink: 0,
    color: '#E4B24F',
    textAlign: 'center',
    marginBottom: -3,
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: '',
    fontSize: 25, // 1.5625rem = 25 (1rem = 16px)
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: 83.48, // 3.33781rem = 83.48 (1rem = 16px)
    alignSelf: 'flex-start', // Alinha à esquerda
  },

  buttonText: {
    color: '#7A0705',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: 'Inter',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: 45,
  },
});

export default Login;