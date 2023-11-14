import React, { useState } from "react";
import { StatusBar } from "react-native";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

const Dashboard = () => {
  // Sample data with added dishes and status
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
      status: "Pending", // Initial status
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
      status: "Pending", // Initial status
    },
  ];

  const [reservations, setReservations] = useState(initialReservations);
  const [completedReservations, setCompletedReservations] = useState([]);

  // Função atualizada para gerenciar o status da reserva
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
      <Text style={styles.header}>Restaurante Dashboard</Text>

      {/* Lista de Reservas */}
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
            <Text style={styles.cardText}>Quant.Pessoas: {item.people}</Text>
            <View style={styles.dishes}>
              {item.dishes.map((dish, index) => (
                <Text key={index} style={styles.dishText}>
                  {dish.quantity} x {dish.name}
                </Text>
              ))}
            </View>
            <Text style={styles.status}>
              Status: {item.status}
              {item.status === "Pending" && (
                <Text style={styles.pendingIndicator}> 🔴</Text>
              )}
              {item.status === "Completed" && (
                <Text style={styles.completedIndicator}> ✅</Text>
              )}
            </Text>
            {item.status === "Pending" && (
              <Button
                title="Mark as Completed"
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
    marginTop: 50,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
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
    fontSize: 16,
    marginTop: 10,
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
