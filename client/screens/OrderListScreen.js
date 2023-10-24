import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import NavegationBar from "../components/NavegationBar";
import Icon from "react-native-vector-icons/FontAwesome";

const OrdersScreen = () => {
  const pedidos = ["Pedido 1 - Em preparo", "Pedido 2 - Em preparo", "Pedido 3 - Finalizado"];

  return (
    <View style={styles.container}>
      <View style={styles.containerOrders}>
        <Text style={styles.headerTitle}>Seus Pedidos</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Icon name="shopping-cart" size={30} />
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          )}
        />
      </View>
      <NavegationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  containerOrders: {
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default OrdersScreen;