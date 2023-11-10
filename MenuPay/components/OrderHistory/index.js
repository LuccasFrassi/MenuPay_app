import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importando ícones
import styles from './styles'; // Importando estilos personalizados

const OrderHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Pedidos</Text>
      <ActivityIndicator style={styles.loading} size="large" color="#520201" />
    </View>
  );
};

export default OrderHistory;
