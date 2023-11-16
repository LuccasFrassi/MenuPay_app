import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantScreen = ({ route }) => {
  const navigation = useNavigation(); 
  // Obtenha o restaurante selecionado dos parâmetros de navegação
  const { selectedRestaurant } = route.params;

  // Acesse o menu do restaurante selecionado
  const dishes = selectedRestaurant.menu;

  const [order, setOrder] = useState([]);

  const addToOrder = (dishToAdd) => {
    setOrder((currentOrder) => {
      const dishIndex = currentOrder.findIndex((dish) => dish._id === dishToAdd._id);
      if (dishIndex > -1) {
        const newOrder = [...currentOrder];
        newOrder[dishIndex].quantity++;
        return newOrder;
      }
      return [...currentOrder, { ...dishToAdd, quantity: 1 }];
    });
  };

  const removeFromOrder = (dishToRemove) => {
    setOrder((currentOrder) => {
      const dishIndex = currentOrder.findIndex((dish) => dish._id === dishToRemove._id);
      if (dishIndex > -1 && currentOrder[dishIndex].quantity > 1) {
        const newOrder = [...currentOrder];
        newOrder[dishIndex].quantity--;
        return newOrder;
      }
      return currentOrder.filter((dish) => dish._id !== dishToRemove._id);
    });
  };

  const calculateTotal = () => order.reduce((total, dish) => total + dish.price * dish.quantity, 0);

  const handlePlaceOrder = () => {
    alert(`Pedido realizado com sucesso! Total: $${calculateTotal().toFixed(2)}`);
    navigation.navigate('OrderList');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{selectedRestaurant.name}</Text>
          <Text style={styles.subtitle}>{selectedRestaurant.type}</Text>
        </View>

        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Menu</Text>
          {dishes.map((dish) => (
            <View key={dish._id} style={styles.dishRow}>
              <View style={styles.dishDetails}>
                <Text style={styles.dishName}>{dish.name}</Text>
                <Text style={styles.dishDescription}>{dish.description}</Text>
              </View>
              <View style={styles.dishActions}>
              <TouchableOpacity style={styles.actionButton} onPress={() => addToOrder(dish)}>
                  <Text style={styles.actionText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => removeFromOrder(dish)}>
                  <Text style={styles.actionTextMenos}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {order.length > 0 && (
        <View style={styles.orderContainer}>
          <Text style={styles.totalText}>Total: ${calculateTotal().toFixed(2)}</Text>
          {order.map((dish) => (
            <View key={dish._id} style={styles.orderItem}>
              <Text>{dish.name} x {dish.quantity}</Text>
              <Text>${(dish.price * dish.quantity).toFixed(2)}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
            <Text style={styles.placeOrderButtonText}>Fazer Pedido</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginBottom: 60, // Espaço para o botão de pedido
  },
  infoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  menuContainer: {
    padding: 20,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dishRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  dishDetails: {
    flex: 1,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  dishActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginHorizontal: 10,
    minWidth: 40,
    padding: 5,
  },
  actionText: {
    fontSize: 40,
    color: '#520201',
  },
  actionTextMenos: {
    fontSize: 60,
    color: '#520201',
  },
  orderContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  placeOrderButton: {
    backgroundColor: '#520201',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  placeOrderButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RestaurantScreen;