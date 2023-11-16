import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";

const ReservationTableScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("1");

  const handleGuestChange = (text) => {
    const numGuests = parseInt(text, 10);
    if (numGuests > 12) {
      Alert.alert(
        "Número de convidados excedido",
        "O número máximo de convidados é 12."
      );
      return;
    }
    setNumberOfGuests(text);
  };

  const formatDate = (text) => {
    const digits = text.replace(/[^\d]/g, "");
    const chars = digits.split("");
    let formattedDate = "";

    for (let i = 0; i < chars.length && i < 8; i++) {
      if (i === 2 || i === 4) {
        formattedDate += "/";
      }
      formattedDate += chars[i];
    }

    return formattedDate;
  };

  const formatTime = (text) => {
    const digits = text.replace(/[^\d]/g, "");
    const chars = digits.split("");
    let formattedTime = "";

    for (let i = 0; i < chars.length && i < 4; i++) {
      if (i === 2) {
        formattedTime += ":";
      }
      formattedTime += chars[i];
    }

    return formattedTime;
  };

  const handleReserveTable = () => {
    if (!date || !time || !numberOfGuests) {
      Alert.alert("Campos Obrigatórios", "Por favor, preencha todos os campos.");
      return;
    }
    // Lógica para efetivar a reserva
    Alert.alert(
      "Reserva Confirmada",
      `Reserva para ${numberOfGuests} pessoas em ${restaurant.name} no dia ${date} às ${time} foi confirmada.`
    );
    navigation.navigate("Restaurant", { selectedRestaurant: restaurant });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Faça sua reserva</Text>

      <Text style={styles.label}>Número de Pessoas:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleGuestChange}
        value={numberOfGuests}
        keyboardType="numeric"
        placeholder="Máximo 12 pessoas"
      />

      <Text style={styles.label}>Data (DD/MM/AAAA):</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDate(formatDate(text))}
        value={date}
        keyboardType="numeric"
        placeholder="Ex: 03/02/2023"
      />

      <Text style={styles.label}>Hora (HH:MM):</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTime(formatTime(text))}
        value={time}
        keyboardType="numeric"
        placeholder="Ex: 13:00"
      />

      <TouchableOpacity style={styles.button} onPress={handleReserveTable}>
        <Text style={styles.buttonText}>Reservar Mesa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#520201",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  label: {
    width: '100%',
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default ReservationTableScreen;
