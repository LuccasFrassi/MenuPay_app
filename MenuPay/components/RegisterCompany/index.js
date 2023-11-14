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

const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleLoginCompany = () => {
    navigation.navigate("LoginCompany");
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (text) => {
    let formattedPhoneNumber = text.replace(/[^\d]/g, ''); // Remove qualquer caractere não numérico
    formattedPhoneNumber = formattedPhoneNumber.substring(0, 11); // Limita a 11 dígitos
    formattedPhoneNumber = formattedPhoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleCreate = () => {
    // Código para processar o cadastro aqui
    // ...
  
    Alert.alert(
      "Cadastro Realizado!",
      "Seu pedido de cadastro foi feito com sucesso. Aguarde até 2 dias úteis para a adição do seu restaurante em nossa plataforma.",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image
          source={require("../../assets/create_company.png")}
          style={styles.logo}
        />

        <Text style={styles.label}>Nome do restaurante:</Text>
        <TextInput placeholder="Digite o nome..." style={styles.input} />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          placeholder="Digite o e-mail..."
          style={styles.input}
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
        />

        <TouchableOpacity style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLoginCompany}>
          <Text style={styles.linkText}>Possou Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
