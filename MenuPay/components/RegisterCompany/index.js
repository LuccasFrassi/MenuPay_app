import React from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const handleCreate = () => {
    navigation.navigate("RegisterCompany");
  };

  const handleLoginCompany = () => {
    navigation.navigate("LoginCompany");
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (text) => {
    const formattedPhoneNumber = text.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    setPhoneNumber(formattedPhoneNumber);
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
          placeholder="Digite o número..."
          style={styles.input}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha..."
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
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
