import React from 'react';
import { TouchableOpacity, Text, BackHandler } from 'react-native';
import styles from './styles';

const LogoutButton = () => {
  const handleLogout = () => {
    // Aqui você pode colocar a lógica de logout antes de fechar o aplicativo
    console.log('Usuário deslogado!');

    // Enviar o aplicativo para o fundo
    BackHandler.exitApp();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Sair</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;