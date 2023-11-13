import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

const NavigationBar = ({ onHomePress }) => {
  const navigation = useNavigation();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  if (keyboardVisible) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={35} color="#520201" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onHomePress || (() => navigation.navigate('Home'))}>
        <Icon name="home" size={35} color="#520201" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderList')}>
        <Icon name="list-ul" size={35} color="#520201" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={35} color="#520201" />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;