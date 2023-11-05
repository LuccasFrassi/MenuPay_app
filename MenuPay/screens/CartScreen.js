import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavegationBar from '../components/NavegationBar';

const CartScreen = () => {
  return (
    <View style={styles.container}>
        <Text>CartScreen</Text>
        <NavegationBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default CartScreen;