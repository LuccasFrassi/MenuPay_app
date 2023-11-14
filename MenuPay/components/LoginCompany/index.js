import React from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const LoginScreen = () => {

    const navigation = useNavigation();
    const handleCreate = () => {
        navigation.navigate('RegisterCompany');
      };

      const handleClient = () => {
        navigation.navigate('Login');
      };

      const handleEntrar = () => {
        navigation.navigate('HomeCompany');
      };
    

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image
          source={require("../../assets/company.png")}
          style={styles.logo}
        />
        <Text style={styles.label}>Usuário:</Text>
        <TextInput
          placeholder="Digite seu usuário..."
          style={styles.input}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha..."
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleEntrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreate}>
          <Text style={styles.linkText}>Primeiro acesso?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClient}>
          <Text style={styles.linkText}>Entrar como cliente?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;