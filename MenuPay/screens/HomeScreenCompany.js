import React, { useState } from "react";
import { StatusBar, View, Text, FlatList, StyleSheet, Button } from "react-native";
import Logout from '../components/Logout';

const Dashboard = () => {
  const initialReservations = [
    {
      id: "1",
      name: "Rubens",
      phone: "4678194691",
      date: "04-11-2023",
      time: "20:00",
      people: 4,
      dishes: [
        { name: "Spaghetti", quantity: 2 },
        { name: "Caesar Salad", quantity: 1 },
      ],
      status: "Pending", // Status inicial
    },
    {
      id: "2",
      name: "Jão",
      phone: "40048922",
      date: "16-11-2023",
      time: "15:00",
      people: 10,
      dishes: [
        { name: "Spaghetti", quantity: 2 },
        { name: "Caesar Salad", quantity: 1 },
      ],
      status: "Pending", // Status inicial
    },
  ];

  const [reservations, setReservations] = useState(initialReservations);
  const [completedReservations, setCompletedReservations] = useState([]);

  const updateStatus = (id, newStatus) => {
    const updatedReservations = reservations.filter((reservation) => {
      if (reservation.id === id && newStatus === "Completed") {
        setCompletedReservations([
          ...completedReservations,
          { ...reservation, status: newStatus },
        ]);
        return false;
      }
      return true;
    });
    setReservations(updatedReservations);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Painel do Restaurante</Text>
        <Logout />
      </View>

      <FlatList
        data={[...reservations, ...completedReservations]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              item.status === "Completed"
                ? styles.cardCompleted
                : styles.cardPending,
            ]}
          >
            <Text style={styles.cardText}>Nome: {item.name}</Text>
            <Text style={styles.cardText}>Telefone: {item.phone}</Text>
            <Text style={styles.cardText}>Data: {item.date}</Text>
            <Text style={styles.cardText}>Hora: {item.time}</Text>
            <Text style={styles.cardText}>Quantidade de Pessoas: {item.people}</Text>
            <View style={styles.dishes}>
              {item.dishes.map((dish, index) => (
                <Text key={index} style={styles.dishText}>
                  {dish.quantity} x {dish.name}
                </Text>
              ))}
            </View>
            <Text style={styles.status}>
              Status: {item.status === "Pending" ? "Pendente" : "Concluído"}
              {item.status === "Pending" && (
                <Text style={styles.pendingIndicator}> 🔴</Text>
              )}
              {item.status === "Completed" && (
                <Text style={styles.completedIndicator}> ✅</Text>
              )}
            </Text>
            {item.status === "Pending" && (
              <Button
                title="Marcar como Concluído"
                onPress={() => updateStatus(item.id, "Completed")}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: 'row',     // Alinha os itens horizontalmente
    alignItems: 'center',     // Centraliza verticalmente
    justifyContent: 'space-between', // Espaçamento entre o título e o botão
    marginTop: 50,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  dishes: {
    marginTop: 10,
  },
  dishText: {
    fontSize: 14,
    color: "#333",
  },
  status: {
    paddingBottom: 10,
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold",
  },
  cardPending: {
    backgroundColor: '#f9f9f9', // ou outra cor para indicar pendente
  },
  cardCompleted: {
    backgroundColor: '#d4edda', // ou outra cor para indicar completado
  },
  pendingIndicator: {
    color: 'red', // Cor do ícone/texto para pendente
  },
  completedIndicator: {
    color: 'green', // Cor do ícone/texto para completado
  },
});

export default Dashboard;
