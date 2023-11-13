import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import registerstyle from '../styles/RegisterStyle';

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Home");
  };

  const handleLogin = () => {
    // Navegue para a tela de cadastro
    navigation.navigate("Login");
  };

  return (
    <View style={registerstyle.container}>
      <Image
        source={require("../assets/bg_red.png")}
        style={{
          ...registerstyle.backgroundImage,
        }}
      />
      <HeaderTitle title={"Cadastre-se!"} />
      <View style={registerstyle.cmpcontainer}>
        <Text style={registerstyle.label}>Nome:</Text>
        <TextInput
          style={[registerstyle.input, { marginTop: 20 }]}
          placeholder=""
          onChangeText={(text) => setNome(text)}
          value={nome}
        />
        <Text style={registerstyle.label}>E-mail:</Text>
        <TextInput
          style={[registerstyle.input, { marginTop: 20 }]}
          placeholder=""
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={registerstyle.label}>Senha:</Text>
        <TextInput
          style={[registerstyle.input, { marginTop: 20 }]}
          placeholder=""
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text style={[registerstyle.label, { paddingLeft: 20, }]}>Telefone:</Text>
        <TextInput
          style={[registerstyle.input, { marginTop: 20, }]}
          placeholder=''
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
        />

        <TouchableOpacity
          style={registerstyle.buttonContainer}
          onPress={handleRegister}
        >
          <Text style={registerstyle.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={registerstyle.signupLabel}>
        Já tem uma conta?
        <Text style={registerstyle.signupText} onPress={handleLogin}>
          {" "}
          Fazer Login
        </Text>
      </Text>
      <Image
        source={require("../assets/LogoHome.png")}
        style={registerstyle.logo}
        resizeMode="contain"
      />
    </View>
  );
};



export default Register;
