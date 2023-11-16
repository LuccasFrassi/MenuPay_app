import React, { useState } from "react";
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import usersService from "../../services/UsersService";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



    const navigation = useNavigation();
    const handleLogin = () => {
      let data = {
        username: email,
        password: password
      }
    
      usersService.login(data)
        .then((response) => {
          console.log(response.data);
          Alert.alert("Login feito com sucesso!")
                navigation.navigate("Home");
        })
        .catch((error) => {
          Alert.alert("Usuário não existe")
          console.log("Cadastro não encontrado!") 
        });
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
          placeholder="Digite o e-mail..."
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha..."
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
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