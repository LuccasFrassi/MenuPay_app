import React from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const LoginComponent = () => {

    const navigation = useNavigation();
    const handleLogin = () => {
      navigation.reset({
        index: 0,
        routes: [{name: "Home"}]
      })
    };
    const handleCreate = () => {
        navigation.navigate('RegisterScreen');
      };

      const handleCompany = () => {
        navigation.navigate('LoginCompany');
      };
    

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image
          source={require("../../assets/iconlogin.png")}
          style={styles.logo}
        />
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          placeholder="Digite seu e-mail..."
          style={styles.input}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha..."
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreate}>
          <Text style={styles.linkText}>Primeiro acesso?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCompany}>
          <Text style={styles.linkText}>Entrar como empresa?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginComponent;