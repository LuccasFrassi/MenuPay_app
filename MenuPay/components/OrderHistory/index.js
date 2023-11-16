import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importando ícones
import styles from './styles'; // Importando estilos personalizados

const OrderHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  // Simulando uma solicitação assíncrona para obter os pedidos do usuário
  useEffect(() => {
    // Defina os pedidos fictícios aqui (substitua pelo seu mecanismo real de obtenção de pedidos)
    const fictitiousOrders = [
      {
        id: '1',
        date: '2023-11-16',
        total: 30.0,
        items: [
          { name: 'Sushi Combo', quantity: 2, price: 15.0 },
          { name: 'Sashimi', quantity: 1, price: 15.0 },
        ],
      },
      {
        id: '2',
        date: '2023-11-15',
        total: 45.0,
        items: [
          { name: 'Sushi Combo', quantity: 3, price: 15.0 },
        ],
      },
    ];

    // Simule um atraso de carregamento
    setTimeout(() => {
      setOrders(fictitiousOrders);
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Histórico de Pedidos</Text>
        <ActivityIndicator style={styles.loading} size="large" color="#520201" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Pedidos</Text>
      {orders.length === 0 ? (
        <Text style={styles.noOrdersText}>Nenhum pedido encontrado.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(order) => order.id}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <View style={styles.orderInfo}>
                <Text style={styles.orderDate}>Data: {item.date}</Text>
                <Text style={styles.orderTotal}>Total: ${item.total.toFixed(2)}</Text>
              </View>
              <View style={styles.orderItems}>
                {item.items.map((orderItem, index) => (
                  <View key={index}>
                    <Text>{orderItem.name} x {orderItem.quantity}</Text>
                    <Text>${(orderItem.price * orderItem.quantity).toFixed(2)}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default OrderHistory;
