import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import NavegationBar from "../components/NavegationBar";

const OrdersScreen = () => {
  const [orders, setOrders] = useState([
    "Pedido 1",
    "Pedido 2",
    "Pedido 3",
    // Adicione mais pedidos conforme necessário
  ]);

  return (
      <View style={styles.container}>
        <View style={styles.containerOrders}>
            <Text style={styles.headerTitle}>Seus Pedidos</Text>
        </View>
        <View>
            
        </View>
        <NavegationBar/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  containerOrders: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: 'center', 
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default OrdersScreen;