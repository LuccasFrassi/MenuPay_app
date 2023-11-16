import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import usersService from "../../services/UsersService";

const RegisterComponent = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (text) => {
    let formattedPhoneNumber = text.replace(/[^\d]/g, ""); // Remove qualquer caractere não numérico
    formattedPhoneNumber = formattedPhoneNumber.substring(0, 11); // Limita a 11 dígitos
    formattedPhoneNumber = formattedPhoneNumber.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  

  const handleCreate = () => {
    // Verifica se todos os campos estão preenchidos
    if (!Name || !email || !phoneNumber || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    
    if (!email.includes('@')) {
      Alert.alert("Erro", "Insira um e-mail válido.");
      return;
    }
  
    // Verifica se a senha tem pelo menos 8 caracteres e um caractere especial
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Alert.alert("Erro", "A senha deve ter no mínimo 8 caracteres e incluir pelo menos um caractere especial.");
      return;
    }
  
    let data = {
      nome: Name,
      email: email,
      senha: password,
      telefone: phoneNumber
    }
  
    usersService.register(data)
      .then((response) => {
        console.log(response.data);
        // Alerta de sucesso movido para dentro da promise de registro
        Alert.alert(
          "Cadastro Realizado!",
          "Usuário cadastrado com sucesso!",
          [{ 
            text: "OK", 
            onPress: () => {
              navigation.navigate("Home");
            } 
          }]
        );
      })
      .catch((error) => {
        console.log("Deu erro") 
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image
          source={require("../../assets/iconloginadd.png")}
          style={styles.logo}
        />

        <Text style={styles.label}>Nome:</Text>
        <TextInput 
        placeholder="Digite o nome..." 
        style={styles.input} 
        onChangeText={setName}
        value={Name}
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          placeholder="Digite o e-mail..."
          style={styles.input}
          onChangeText={handleEmailChange}
          value={email}
        />

        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          placeholder="(DD) XXXX-XXXX"
          style={styles.input}
          keyboardType="phone-pad"
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha..."
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.linkText}>Possou Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterComponent;
