import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import registercompanystyle from '../styles/RegisterCompanyStyle';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    // Valide se a senha e a confirmação de senha correspondem
    if (password !== "") {
      console.log('As senhas não coincidem');
      return;
    }

    // Você pode adicionar lógica aqui para processar o cadastro do usuário
    // Por exemplo, enviar os dados de cadastro para um servidor ou banco de dados.

    // Após o cadastro bem-sucedido, navegue para a tela "Home"
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    // Navegue para a tela de cadastro
    navigation.navigate('LoginCompany');
  };

  return (
    <View style={registercompanystyle.container}>
      <Image
        source={require('../assets/bg_red.png')}
        style={{
          ...registercompanystyle.backgroundImage,
        }}
      />
      <HeaderTitle title={'Cadastre-se!'} />
      <View style={registercompanystyle.cmpcontainer}>
        <Text style={registercompanystyle.label}>CNPJ: </Text>
        <TextInput
          style={[registercompanystyle.input, { marginTop: 20 }]}
          placeholder=''
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={registercompanystyle.label}>Senha:</Text>
        <TextInput
          style={[registercompanystyle.input, { marginTop: 20 }]}
          placeholder=''
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text style={[registercompanystyle.label, { paddingLeft: 20, }]}>Telefone:</Text>
        <TextInput
          style={[registercompanystyle.input, { marginTop: 20, }]}
          placeholder=''
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
        />
        <TouchableOpacity
          style={registercompanystyle.buttonContainer}
          onPress={handleRegister}
        >
          <Text style={registercompanystyle.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={registercompanystyle.signupLabel}>
        Já tem sua empresa cadastrada?
        <Text style={registercompanystyle.signupText} onPress={handleLogin}>
          {' '}
          Fazer Login
        </Text>
      </Text>
      <Image
        source={require('../assets/LogoHome.png')}
        style={registercompanystyle.logo}
        resizeMode='contain'
      />
    </View>
  );
};



export default Register;