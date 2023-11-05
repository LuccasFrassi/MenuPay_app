import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text,TextInput,TouchableOpacity,StyleSheet,Image,} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import loginstyle from '../styles/LoginStyle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Verifique as credenciais do usuário (exemplo simplificado)
    if (email === '' && password === '') {
      // Login bem-sucedido, navegue para a tela "Home"
      navigation.navigate('Home'); // "Home" é o nome da tela de destino
    } else {
      // Caso contrário, exiba uma mensagem de erro ou faça o que for necessário
      console.log('Credenciais inválidas');
    }
  };

  const handleSignUp = () => {
    // Navegue para a tela de cadastro
    navigation.navigate('RegisterScreen');
  };

  const handleLoginCompany = () => {
    // Navegue para a tela de cadastro
    navigation.navigate('LoginCompany');
  };
  return (
    <View style={loginstyle.container}>
      <Image
        source={require('../assets/bg_red.png')}
        style={loginstyle.backgroundImage}
      />

      <HeaderTitle title={'Conecte-se!'} />
      <View style={loginstyle.cmpcontainer}>
        <Text style={loginstyle.label}>E-mail:</Text>
        <TextInput
          style={[loginstyle.input, { marginTop: 20 }]}
          placeholder=''
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={loginstyle.label}>Senha:</Text>
        <TextInput
          style={[loginstyle.input, { marginTop: 20 }]}
          placeholder=''
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={loginstyle.buttonContainer} onPress={handleLogin}>
          <Text style={loginstyle.buttonText}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={loginstyle.signupLabel}>
        Não tem uma conta?
        <Text style={loginstyle.signupText} onPress={handleSignUp}>
          {' '}
          Cadastre-se
        </Text>
      </Text>
      <Text style={loginstyle.signupLabel}>
        Fazer login como empresa?
        <Text style={loginstyle.signupText} onPress={handleLoginCompany}>
          {' '}
          Login
        </Text>
      </Text>
      <Image
        source={require('../assets/LogoHome.png')}
        style={loginstyle.logo}
        resizeMode='contain'
      />
    </View>
  );
};



export default Login;