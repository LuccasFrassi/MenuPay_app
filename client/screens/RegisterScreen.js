import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    // Valide se a senha e a confirmação de senha correspondem
    if (password !== confirmPassword) {
      console.log("As senhas não coincidem");
      return;
    }

    // Você pode adicionar lógica aqui para processar o cadastro do usuário
    // Por exemplo, enviar os dados de cadastro para um servidor ou banco de dados.

    // Após o cadastro bem-sucedido, navegue para a tela "Home"
    navigation.navigate("Home");
  };

  const handleLogin = () => {
    // Navegue para a tela de cadastro
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.cmpcontainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastro</Text>
        </View>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          placeholder=""
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          placeholder=""
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text style={styles.labelConfirm}>Confirmar Senha:</Text>
        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          placeholder=""
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signupLabel}>
        Já tem uma conta?
        <Text style={styles.signupText} onPress={handleLogin}>
          {" "}
          Fazer Login
        </Text>
      </Text>
      <Image
        source={require("../assets/LogoHome.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#520201",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  cmpcontainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  header: {
    paddingLeft: 30,
    marginRight: -30,
  },
  title: {
    fontSize: 36,
    color: "white",
  },
  input: {
    width: 350,
    height: 42.75,
    borderRadius: 21.375,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 0,
  },
  logo: {
    width: 300,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignContent: "flex-end",
  },
  buttonContainer: {
    display: "flex",
    width: 308,
    height: 113.25,
    paddingVertical: 6,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    marginTop: 40,
    borderRadius: 62.5,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#E4B24F",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  title: {
    fontSize: 36,
    paddingRight: 250,
    color: "white",
    fontWeight: "700",
  },
  label: {
    height: 60,
    color: "#E4B24F",
    marginBottom: -18,
    textShadowColor: "#000",
    textShadowOffset: { width: 0,height: 4 },
    textShadowRadius: 4,
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 83.48,
    paddingRight: 250,
  },
  buttonText: {
    color: "#7A0705",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
    fontFamily: "Roboto_400Regular",
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 45,
  },
  signupLabel: {
    color: "#E4B24F",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: "Roboto_700Bold",
    fontSize: 20, // 1.25rem = 20 (1rem = 16px)
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 53.35, // 3.33781rem = 53.35 (1rem = 16px)
  },
  signupText: {
    color: "#FFF",
    fontFamily: "Roboto_700Bold",
    fontSize: 20, // 1.25rem = 20 (1rem = 16px)
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 53.35, // 3.33781rem = 53.35 (1rem = 16px)
  },
  labelConfirm: {
    color: "#E4B24F",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontSize: 25, // 1.5625rem em pixels (considerando 16 pixels por rem)
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 80, // 3.33781rem em pixels (considerando 24 pixels por rem)
    paddingRight: 145,
    marginBottom: -40,
  },
});

export default Register;
