// NavigationBar.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone FontAwesome ou outra biblioteca de ícones que você preferir
import { styles } from './styles';

const NavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={30} color="#520201" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} color="#520201" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderListScreen')}>
        <Icon name="list-ul" size={30} color="#520201" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={30} color="#520201" />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;